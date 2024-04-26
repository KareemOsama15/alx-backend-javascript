export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this.name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this.length;
  }

  set students(students) {
    if (students instanceof Array) {
      throw new TypeError('Students must be a array of Strings');
    }
    this.students = students;
  }

  get students() {
    return this.students;
  }
}
