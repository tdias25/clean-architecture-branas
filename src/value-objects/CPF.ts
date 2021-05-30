import { validateCpf } from "../utils/validateCpf";

export default class CPF {
  private cpfValue!: string;

  constructor(cpf: string) {
    this.setCPF(cpf)
  }

  private setCPF(cpf: string) {
    if (validateCpf(cpf) === false) {
      throw new Error('Invalid CPF')
    }

    this.cpfValue = cpf
  }

  public cpf(): string {
    return this.cpfValue
  }
}
