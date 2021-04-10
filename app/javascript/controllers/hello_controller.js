import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "concat" ];

  greet() {
    const element = this.nameTarget;
    const name = element.value;
    console.log(`Hello, ${name}!`);
    console.log(this.concatTarget);

    this.concatTarget.value = this.concatTarget.value + " " + this.nameTarget.value;
  }

  get name() {
    return this.nameTarget.value;
  }
}