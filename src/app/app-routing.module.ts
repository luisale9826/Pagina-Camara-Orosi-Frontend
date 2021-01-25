import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DirectorioModule } from './directorio/directorio.module';
import { LoginModule } from './login/login.module';
import { ConozcanosAfiliarseModule } from './conozcanos-afiliarse/conozcanos-afiliarse.module';
import { PromocionesModule } from './promociones/promociones.module';

const routes: Routes = [{ path: '', component: IndexComponent }];

@NgModule({
  imports: [
    DirectorioModule,
    LoginModule,
    ConozcanosAfiliarseModule,
    PromocionesModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
