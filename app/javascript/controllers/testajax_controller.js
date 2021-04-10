import {Controller} from "stimulus";


export default class extends Controller {
    static targets = ["result"];

    makeRequest() {
        fetch("/home/get_something")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.resultTarget.value = json['message'];
            });
    }

    notJustChange(val) {
        this.resultTarget.value = val;
    }

    justChange() {
        this.resultTarget.value = "Hey! ";
    }

    getProperty() {
        return this.property;
    }
}