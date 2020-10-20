import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DirectorioModule } from './directorio/directorio.module';
import { ArmarTourModule } from './armar-tour/armar-tour.module';
import { LoginModule } from './login/login.module';
import { ConozcanosAfiliarseModule } from './conozcanos-afiliarse/conozcanos-afiliarse.module';
import { PromocionModule } from './promocion/promocion.module';

const routes: Routes = [{ path: '', component: IndexComponent }];

@NgModule({
  imports: [
    DirectorioModule,
    ArmarTourModule,
    LoginModule,
    ConozcanosAfiliarseModule,
    PromocionModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
