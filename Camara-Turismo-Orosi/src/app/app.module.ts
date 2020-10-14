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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { ConozcanosAfiliarseComponent } from './conozcanos-afiliarse/conozcanos-afiliarse.component';
import { ConozcanosAfiliarseModule } from './conozcanos-afiliarse/conozcanos-afiliarse.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    DirectorioComponent,
    ArmarTourComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ConozcanosAfiliarseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
