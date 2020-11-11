import { Phone } from './phone';

export class Company {
  constructor(
    public companyId?: string,
    public companyName?: string,
    public companyDescription?: string,
    public companyCategory?: string,
    public companyEmail?: string,
    public companyPhones?: Phone[],
    public companyAddress?: string,
    public companyLocation?: string,
    public companyLogo?: string,
    public companyFacebookProfile?: string,
    public companyInstagramProfile?: string
  ) {}
}
