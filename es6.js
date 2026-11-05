const students = [
      { name: "Ali", marks: 80 },
       { name: "Sara", marks: 92 },
        { name: "Ahmed", marks: 45 }
       ];
       
       const showResult = ({ name, marks }) => `${name} has ${marks} marks`;

       students
        .filter(s => s.marks >= 50)
          .forEach(s => console.log(showResult(s)));