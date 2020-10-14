import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DirectorioModule } from './directorio/directorio.module';
import { AfiliadosModule } from './afiliados/afiliados.module';
import { ArmarTourModule } from './armar-tour/armar-tour.module';
import { LoginModule } from './login/login.module';

const routes: Routes = [{ path: '', component: IndexComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DirectorioModule,
    AfiliadosModule,
    ArmarTourModule,
    LoginModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
