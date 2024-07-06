interface Person {
  name: string;
  age: number;
}
// create array of person objects
const people: Person[] = [
  { name: "John Lee", age: 30 },
  { name: "Marry Burner", age: 25 },
  { name: "Harry Kill", age: 35 },
];
//Function to ilter people who are at least 30 years old
function filterAdult(persons: Person[]): Person[] {
  return persons.filter((person) => person.age >= 30);
}
// Using the function and logging the result
const adults = filterAdult(people);
console.log(adults);
