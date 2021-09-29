function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

let stud1 = new Student('Петр', 'муж', 17);
let stud2 = new Student('Олег', 'муж', 20);
let stud3 = new Student('Женя', 'жен', 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  };
};

Student.prototype.addMarks = function (...rest) {
  for (let i = 0; i < rest.length; i++) {
    this.addMark(rest[i]);
  };
};

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  };
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};