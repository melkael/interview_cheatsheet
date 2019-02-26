/*
** Closure example
*/

var createPet = function(name) {
  var sex;
  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
console.log(pet.getName());                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver

/*
** Variable number of arguments example
*/

function myConcat(separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

myConcat(', ', 'red', 'orange', 'blue');

/*
** Rest parameters
** theArgs est toujours un tableau
*/

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

// Fonction flechée : le this est celui de la fonction qui encapsule

/*
Use .bind() when you want that function to later be called with a certain context, useful in events.
Use .call() or .apply() when you want to invoke the function immediately, with modification of the context.
*/

var mathLib = {
    pi: 3.14,
    area: function(r) {
        return this.pi * r * r;
    },
    circumference: function(r) {
        return 2 * this.pi * r;
    }
};

console.log(mathLib.area(2))
console.log(mathLib.area.call({pi: 3.14159}, 2))
console.log(mathLib.area.apply({pi: 3.14159}, [2]))

var newLib = mathLib.area.bind({pi: 3.14159})
console.log(newLib(2))


//object.keys to get keys of an object
//object.values for its values
//object.prototype.hasOwnProperty checks if a key exists
//Object.freeze(obj) prevents obj properties from being modified
//Object.seal(obj) prevents obj from getting new properties or errasing old ones but allows to modify existing ones

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var newCar = new Car('Honda', 'City', 2007);
console.log(newCar instanceof Car); // returns true

var obj = {"lips": "red", "hair": "brown"}
Object.freeze(obj)
obj["lips"] = "pink"
console.log(obj)
obj["nails"] = "yellow"
console.log(obj)

// OOP

var animalGroups = {
  MAMMAL: 1,
  REPTILE: 2,
  AMPHIBIAN: 3,
  INVERTEBRATE: 4
};
function Animal(name, type) {
  this.name = name;
  this.type = type;
}
var dog = new Animal("dog", animalGroups.MAMMAL);
var crocodile = new Animal("crocodile", animalGroups.REPTILE);

console.log(dog)

Animal.prototype.shout = function() {
    console.log(this.name + ' is ' + this.sound + 'ing...');
}


function Wolf(name, type) {
   Animal.call(this, name, type);
   this.sound = "roar";
}

Wolf.prototype = Object.create(Animal.prototype);

var wolf = new Wolf("wolf", animalGroups.MAMMAL)

console.log(wolf)
wolf.shout()

/*
arr.reduce((accumulator,
           currentValue,
           currentIndex) => {
           process(accumulator, currentValue)
           return intermediateValue/finalValue
}, initialAccumulatorValue) // returns reduced value
*/

/*
arr.filter((elem) => {
   return true/false
})
*/

/*
      try {
        updateUI(result["posts"]);
       }
      catch(e) {
        // Custom functions
        logError();
        flashInfoMessage();
      }
*/