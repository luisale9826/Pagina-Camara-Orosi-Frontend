export class Promotion {
  constructor(
    public name: string,
    public link: any,
    public startDate: string,
    public expirationDate: string,
    public id?: string
  ) {}
}
