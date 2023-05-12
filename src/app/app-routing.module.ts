import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BecadoComponent } from './becado/becado.component';
import { SettingsComponent } from './settings/settings.component';
import { ResidenciaComponent } from './residencia/residencia.component';
import { ApartamentoComponent } from './apartamento/apartamento.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from "./body/body.component";
import { RegisterComponent } from "./register/register.component";

import { UserlistingComponent } from "./userlisting/userlisting.component";
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'residencia', component: ResidenciaComponent, canActivate: [AuthGuard] },
  { path: 'becado', component: BecadoComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'apartamento', component: ApartamentoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userlisting', component: UserlistingComponent, canActivate: [AuthGuard] },
  { path: '404', component: PageNotFoundComponent },
    { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

