function student(name,age) {

    this.name = name;
    this.age = age;

    this.study = function() {
        alert("studying");
    };

    this.eat = function() {
        alert("eating");
    }
}
var stu = new student("abc",12);
var stu1 = new student("abcd",12);
alert(stu1.name);