const Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
 
const Teacher = function() {};
Teacher.prototype.teach = function(subject)
{
    console.log(this);
    console.log(this.name + " is now teaching " + subject);
}
 
//Setting Person's prototype object as parent of Teacher's prototype Object
Object.setPrototypeOf(Teacher.prototype,Person.prototype);

const him = new Teacher();
 
//Borrowing the initilize() method of person object to initilize Teacher() Object.
him.initialize("Adam", 45);
him.teach("Maths");