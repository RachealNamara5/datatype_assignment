//Add the following property and value to the person object: country: Uganda.
const person = {
  firstName: "Jane",
  lastName: "Doe"
};
Object.assign(person, { country: "Uganda" });



console.log(person.country) // to prove if the new  property has been added



//deleting a property and value from an object eg fruit 
const fruit={
  name:"mango",
  colouRipe:"yellow",
  colourUnripe:"green",
  nutrient:"vitamin"
}
delete fruit.nutrient;

console.log(fruit);


// Create an object called person with name = John, age = 50. Then, access the object to alert("John is 50")
const indiviual = {
  name: "John",
  age: 50
};

alert(indiviual.name + " is " + person.age);

console.log(indiviual)