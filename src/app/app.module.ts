import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BecadoComponent } from './becado/becado.component';
import { SettingsComponent } from './settings/settings.component';
import { } from '@angular/material';
import { ResidenciaComponent } from './residencia/residencia.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApartamentoComponent } from './apartamento/apartamento.component';
import { DialogBecadoComponent } from './dialog-becado/dialog-becado.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component'
import { MaterialModule } from 'src/material.module';
import { LoginComponent } from './login/login.component';
import { CdkTableModule,CdkTableDataSourceInput } from "@angular/cdk/table";

import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { DialogAptoComponent } from './dialog-apto/dialog-apto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SettingsComponent,
    ResidenciaComponent,
    DialogComponent,
    ApartamentoComponent,
    BecadoComponent,
    DialogBecadoComponent,
    RegisterComponent,
    LoginComponent,
    UserlistingComponent,
    UpdatepopupComponent,
    DialogAptoComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    CdkTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
