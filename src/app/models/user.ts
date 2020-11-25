export class User {
  constructor(
    public userName: string,
    public userEmail: string,
    public password: string,
    public role: string,
    public userId?: string
  ) {}
}
