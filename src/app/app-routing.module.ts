import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { QuienesSomosPageComponent } from './components/pages/quienes-somos-page/quienes-somos-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { TiendaPageComponent } from './components/pages/tienda-page/tienda-page.component';
import { RedirectGuardGuard } from './guards/redirect-guard.guard';


const routes: Routes = [
  {
    path:'', pathMatch: 'full',redirectTo:'home'
  },
  {
    path: 'home',component: HomePageComponent
  },
  {
    path: 'quienesSomos',component: QuienesSomosPageComponent
  },
  {
    path: 'tienda',component: TiendaPageComponent
  },
  {
    path: 'login',component: LoginPageComponent
    /* children: [
      {
        path: 'register',component: RegisterPageComponent
      }
    ]  */   
  },
  {
    path: 'register',component: RegisterPageComponent
  },
 /*  {
    path: 'nombreDeRuta',component: RedirectGuardGuard,
    canActivate: [RedirectGuardGuard],
    data: {
    externalUrl: 'www.google.com'
    }
  }, */
  {
    path: '**', component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
