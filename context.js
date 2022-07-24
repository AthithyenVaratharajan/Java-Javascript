class Dog {
    constructor(name) {
      this.name = name;
    }

    changeName() {
      this.name = "Layla";
    }
  }

  let dog = new Dog("Bowser");

  // Note this is **not invoked** - you are assigning the function itself
  let change = dog.changeName;
  console.log(change()); // TypeError, due to not recognizing a valid context

  // Your dog still has the same name!
  console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

class Cat {
    purr() {
      console.log("meow");
    }

    purrMore() {
      this.purr();
    }
  }
  let cat = new Cat();

  cat.purrMore();
