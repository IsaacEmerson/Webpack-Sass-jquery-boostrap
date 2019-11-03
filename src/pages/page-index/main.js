require("../../sass/main.scss");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded", "page-index");
});

class Foo {
  constructor() {
    this.value = "foobar";
  }

  static instance() {
    return new Foo();
  }

  getValue() {
    return this.value;
  }
}

console.log(Foo.instance().getValue());
