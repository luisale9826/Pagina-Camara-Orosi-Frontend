import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Promocion } from 'src/app/models/Promocion';
import { PromocionService } from 'src/app/services/promocion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html',
  styleUrls: ['./promocion.component.css'],
})
export class PromocionComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl(''),
    file: new FormControl(''),
    fileSource: new FormControl(''),
  });
  error = '';
  promocion: Promocion = new Promocion();

  selectedFile: File;
  constructor(
    private promocionService: PromocionService,
    private router: Router,private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
  }

  submit(): void {
   
    //this.promocionService.insertPromotionFile(this.myForm.get('name').value,this.selectedFile);
    if(this.myForm.get('name').value!="" && this.selectedFile!=null ){
      this.promocionService.
      insertPromotionFile(this.myForm.get('name').value,this.selectedFile)
            .then((data) => {
           
              this.router.navigate(['/promocion']).then(() => {
                location.reload();
                this.toastr.success(
                  `Se ha insertado la proción`,
                  'Insertado!!!'
                );
              });
            })
            .catch((err) => {
              this.toastr.error('Se produjo un error al insertar', 'Error');
             
            });
    }else{
      this.toastr.error('Ingrese todos los campos', 'Error');
    }
   
    
    //alert("Promocion Guardada");
  }

  
}
