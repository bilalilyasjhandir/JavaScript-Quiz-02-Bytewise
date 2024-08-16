let student = {
  name: "Bilal",
  age: 20,
  subjects: ["Biology", "Physics", "Chemistry"]
};

function addSubject(student, newSubject) {
  student.subjects.push(newSubject);
}
addSubject(student, "Maths");
console.log(student); 