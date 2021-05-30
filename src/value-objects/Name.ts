export default class Name {
  private nameValue: string;

  constructor(name: string) {
    if (/^([A-Za-z]+ )+([A-Za-z])+$/.test(name) === false) {
      throw new Error('Invalid name');
    }

    this.nameValue = name
  }

  public name(): string {
    return this.nameValue
  }
}
