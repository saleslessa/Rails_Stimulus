import {Controller} from "stimulus";

import TodosModel from "../packs/models";

export default class extends Controller {
    static targets = ["list", "name", "nameHelper", "closeButton"];

    initialize() {
        this.items = [];
        this.loadTodos();
    }

    loadTodos() {
        fetch("/list_items")
            .then(response => response.json())
            .then(response => {
                this.items = response['message'];
                this.loadListItems();
            });
    }

    loadListItems() {
        this.listTarget.innerHTML = '';
        if (this.items === undefined) return;

        for (let i = 0; i < this.items.length; i++) {
            this.listTarget.innerHTML +=
                `<tr>
                    <td>${this.items[i].name}</td>
                    <td>${this.items[i].until}</td>
                    <td>${this.items[i].deleted}</td>
                </tr>`;
        }
    }

    newTodo() {
        if (this.nameTarget.value === undefined || this.nameTarget.value.length === 0) {
            this.nameHelperTarget.innerHTML = 'Error';
            return false;
        }

       fetch("/todos", {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
           },
           body: JSON.stringify({
               "name": this.nameTarget.value,
               "until": '2021-04-09',
               "deleted": 'false'
           })
       }).then(response => {return response.json()})
           .catch(err => {
               swal(err.message, "", "error");
           })
           .then(response => {
               swal(response.message, "", "success")
                   .then(r => {
                       this.closeButtonTarget.click();
                       this.loadTodos();
                       this.nameTarget.value = '';

                   });
           });
    }

}