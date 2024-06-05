#! /usr/bin/env node
import inquirer from "inquirer";
// import("inquirer")
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
let ProgramStart = async (persons) => {
    console.log(`Wellcome Guest`);
    do {
        const ans = await inquirer.prompt({
            type: "list",
            choices: ["Self", "Students", "Exit"],
            name: "select",
            message: "who do you want to talk"
        });
        if (ans.select === "Exit") {
            console.log("Goodbye Guest");
            break;
        }
        if (ans.select === "Self") {
            console.log(`Hello I am Talking to my self`);
            console.log(`i am fine and learning typescript now`);
        }
        if (ans.select === "Students") {
            console.log(`Hello Your Talking to a  student`);
            let ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Enter Student Name"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                let addStudent = new Student(ans.student);
                persons.addStudent(addStudent);
                console.log(`Hello My name is ${addStudent.name} and i am fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello My name is ${student.name} and i am fine........`);
                console.log(persons.students);
            }
        }
    } while (true);
};
ProgramStart(persons);
