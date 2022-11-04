export class Student {
    studentName: string|any;
    studentEmail: string|any;
    studentContact: number|any;
    studentSubject : string|any;

    constructor(studentName: string, studentEmail: string, studentContact: number, studentSubject: string){
        this.studentName = studentName;
        this.studentContact = studentContact;
        this.studentEmail = studentEmail;
        this.studentSubject = studentSubject;
    }

}
