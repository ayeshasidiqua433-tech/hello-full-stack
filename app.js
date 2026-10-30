import greet, { add, multiply } from "./math.js";
import { Student } from "./student.js";

console.log(greet("Ali"));
console.log(add(2, 3));
console.log(multiply(4, 5));

const s1 = new Student("Ali", 80);
const s2 = new Student("Ahmed", 40);

console.log(s1.show());
console.log(s1.isPassed());
console.log(s2.isPassed());