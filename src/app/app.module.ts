import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './feature/nav-bar/nav-bar.component';
import { FooterComponent } from './feature/footer/footer.component';
import { QuienesSomosPageComponent } from './components/pages/quienes-somos-page/quienes-somos-page.component';
import { TiendaPageComponent } from './components/pages/tienda-page/tienda-page.component';
import { MatCardModule } from '@angular/material/card';//Tarjetas imagen
import { MatBadgeModule } from '@angular/material/badge';//Pills de boostrap
import { MatIconModule } from '@angular/material/icon';//iconos
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from '@angular/material/button';//botones
/*Importar librerias de google maps */
import { AgmCoreModule } from '@agm/core';
/*  ERROR FormControl
This likely means that the library (@angular/forms) which declares FormControl has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be 
compatible with Ivy.
*/
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    NavBarComponent,
    FooterComponent,
    QuienesSomosPageComponent,
    TiendaPageComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,

    FormsModule,
   
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:''
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
