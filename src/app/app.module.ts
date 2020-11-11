import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { ArmarTourComponent } from './armar-tour/armar-tour.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { ConozcanosAfiliarseModule } from './conozcanos-afiliarse/conozcanos-afiliarse.module';
import { PromocionModule } from './promocion/newPromo/promocion.module';
import { EliminarPromocionModule } from './promocion/deletePromo/eliminarPromocion.module';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderDirectoryComponent } from './header-directory/header-directory.component';
import { CompanyService} from './services/company.service';
import { ToastrModule } from 'ngx-toastr';
import { SocialMediaComponent } from './social-media/social-media.component';
import { PromocionComponent } from './promocion/promocion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    DirectorioComponent,
    ArmarTourComponent,
    PromocionComponent,
    SocialMediaComponent,
    HeaderDirectoryComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ConozcanosAfiliarseModule,
    PromocionModule,
    EliminarPromocionModule
    BrowserAnimationsModule
    ToastrModule.forRoot(),
    PromocionModule,
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
