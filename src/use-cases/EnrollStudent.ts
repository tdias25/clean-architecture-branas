import Student from "../entities/Student";
import { validateCpf } from "../utils/validateCpf"

export default class EnrollStudent {

  private students: Student[] = [];

  execute(enrollmentRequest: any): boolean {

    const { name, cpf } = enrollmentRequest.student;

    if (/^([A-Za-z]+ )+([A-Za-z])+$/.test(name) === false) {
      throw new Error('Invalid student name')
    }

    if (validateCpf(cpf) === false) {
      throw new Error('Invalid CPF')
    }

    if (this.students.find(element => element.cpf === cpf)) {
      throw new Error('Student Duplicated');
    }

    this.students.push({
      name,
      cpf
    })

    return true
  }
}