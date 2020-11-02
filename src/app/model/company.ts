export class Company {
  private companyId: string;
  private companyName: string;
  private companyDescription: string;
  private companyCategory: string;
  private companyEmail: string;
  private companyPhones: string[];
  private companyAddress: string;
  private companyLocation: string;
  private companyLogo: string;
  private companyFacebookProfile: string;
  private companyInstagramProfile: string;

  constructor(
    cName: string,
    cCategory: string,
    cId?: string,
    cDescription?: string,
    cEmail?: string,
    cPhones?: string[],
    cAddress?: string,
    cLocation?: string,
    cLogo?: string,
    cFacebook?: string,
    cInstagram?: string
  ) {
    this.companyName = cName;
    this.companyId = cId;
    this.companyDescription = cDescription;
    this.companyCategory = cCategory;
    this.companyEmail = cEmail;
    this.companyPhones = cPhones;
    this.companyAddress = cAddress;
    this.companyLocation = cLocation;
    this.companyLogo = cLogo;
    this.companyFacebookProfile = cFacebook;
    this.companyInstagramProfile = cInstagram;
  }

  public get CompanyId(): string {
    return this.companyId;
  }

  public get CompanyName(): string {
    return this.companyName;
  }
  public set CompanyName(value: string) {
    this.companyName = value;
  }

  public get CompanyDescription(): string {
    return this.companyDescription;
  }
  public set CompanyDescription(value: string) {
    this.companyDescription = value;
  }

  public get CompanyClasification(): string {
    return this.companyCategory;
  }
  public set CompanyClasification(value: string) {
    this.companyCategory = value;
  }

  public get CompanyEmail(): string {
    return this.companyEmail;
  }
  public set CompanyEmail(value: string) {
    this.companyEmail = value;
  }

  public get CompanyPhones(): string[] {
    return this.companyPhones;
  }

  public get CompanyAddress(): string {
    return this.companyAddress;
  }
  public set CompanyAddress(value: string) {
    this.companyAddress = value;
  }

  public get CompanyLocation(): string {
    return this.companyLocation;
  }
  public set CompanyLocation(value: string) {
    this.companyLocation = value;
  }

  public get CompanyFacebookProfile(): string {
    return this.companyFacebookProfile;
  }
  public set CompanyFacebookProfile(value: string) {
    this.companyFacebookProfile = value;
  }

  public get CompanyInstagramProfile(): string {
    return this.companyInstagramProfile;
  }
  public set CompanyInstagramProfile(value: string) {
    this.companyInstagramProfile = value;
  }

  public get CompanyLogo(): string {
    return this.companyLogo;
}
public set CompanyLogo(value: string) {
    this.companyLogo = value;
}
}
