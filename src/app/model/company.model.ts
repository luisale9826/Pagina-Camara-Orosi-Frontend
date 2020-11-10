
export class Company{
    companyId: string;
    companyName:String;
    companyEmail:string;
    companyPhone:string;
    companyLogo:string;
    companyCategory:string;
   

    constructor(companyName?:string,companyEmail?:string,companyPhone?:string,companyLogo?:string, companyCategory?:string){
        this.companyName=companyName;
        this.companyEmail=companyEmail
        this.companyPhone=companyPhone;
        this.companyLogo=companyLogo;
        this.companyCategory=companyCategory;
    }
}