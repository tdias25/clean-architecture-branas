import EnrollStudent from "./EnrollStudent";

describe('EnrollStudent', () => {

  test('Should not enroll without valid student name', () => {

    const enrollmentRequest = {
      student: {
        name: "Ana"
      }
    }

    const enrollStudent = new EnrollStudent();

    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow('Invalid student name')
  })

  test('Should not enroll without valid student cpf', () => {

    const enrollmentRequest = {
      student: {
        name: "Ana Fulana",
        cpf: 'invalid_cpf'
      }
    }

    const enrollStudent = new EnrollStudent();

    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow('Invalid CPF')
  })

  test('Should not enroll duplicated student', () => {

    const enrollmentRequest = {
      student: {
        name: "Ana Fulana",
        cpf: '07259456051'
      }
    }

    const enrollStudent = new EnrollStudent();

    enrollStudent.execute(enrollmentRequest)
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow('Student Duplicated')
  })

});