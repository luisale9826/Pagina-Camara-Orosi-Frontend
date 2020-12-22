import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DirectorioService } from '../services/directorio.service';
import { LoginService } from '../services/login.service';
import { InsertarCompanyDialogComponent } from './management/insertar-company-dialog/insertar-company-dialog.component';
import { VerCompanyDialogComponent } from './visitante/ver-company-dialog/ver-company-dialog.component';
import { Company } from '../models/company';
import { ActivatedRoute } from '@angular/router';
import { VerImagenCompanyDialogComponent } from './visitante/ver-imagen-company-dialog/ver-imagen-company-dialog.component';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css'],
})
export class DirectorioComponent implements OnInit, AfterViewInit {
  companyPhones: object;
  status: boolean;
  companies: Company[];
  directory: Map<string, Company[]> = new Map();

  constructor(
    private loginService: LoginService,
    private dialog: MatDialog,
    private directoryService: DirectorioService,
    private route: ActivatedRoute
  ) {
    this.status = this.loginService.isAuthenticated();
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe((params) => {
      this.openDialogCompanyById(params.id);
    });
  }

  openDialogInsertCompany(): void {
    const insertCompanyDialog = this.dialog.open(
      InsertarCompanyDialogComponent,
      {
        data: {
          titulo: 'Añadir Compañía',
          companyId: null,
          companyName: null,
        },
      }
    );
    insertCompanyDialog
      .afterClosed()
      .toPromise()
      .then(() => {
        location.reload();
      });
  }

  openDialogVerCompany(company: Company): void {
    this.dialog.open(VerCompanyDialogComponent, {
      data: { company },
    });
  }

  openCompanyImageDialog(company: Company): void {
    this.dialog.open(VerImagenCompanyDialogComponent, {
      data: company,
    });
  }

  getCompanies(): any {
    this.directoryService
      .getCompany()
      .then((data: Company[]) => {
        this.companies = data;
        this.companies.forEach((com) => {
          const category = this.directory.get(com.companyCategory);
          if (category === undefined) {
            this.directory.set(com.companyCategory, [com]);
          } else {
            category.push(com);
            this.directory.set(com.companyCategory, category);
          }
        });
      })
      .catch((err) => console.log(err));
  }

  private openDialogCompanyById(id: string): void {
    if (id !== undefined) {
      this.directoryService
        .getCompanyById(id)
        .then((data) => {
          this.openDialogVerCompany(data.body.company);
        })
        .catch((err) => console.log(err));
    }
  }
}
