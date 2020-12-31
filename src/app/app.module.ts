import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { ConozcanosAfiliarseModule } from './conozcanos-afiliarse/conozcanos-afiliarse.module';
import { PromocionModule } from './promocion/newPromo/promocion.module';
import { EliminarPromocionModule } from './promocion/deletePromo/eliminarPromocion.module';
import { AngularMaterialModule } from './angular-material.module';
import { ToastrModule } from 'ngx-toastr';
import { PromocionesModule } from './promociones/promociones.module';
import { UserModule } from './user/user.module';
import { WebConfigModule } from './web-config/web-config.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConozcanosAfiliarseModule,
    HttpClientModule,
    LoginModule,
    NoopAnimationsModule,
    PromocionModule,
    EliminarPromocionModule,
    ToastrModule.forRoot(),
    PromocionModule,
    PromocionesModule,
    UserModule,
    WebConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
