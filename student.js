export class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  isPassed() {
    return this.marks >= 50;
  }

  show() {
    return `${this.name}: ${this.marks} marks`;
  }
}