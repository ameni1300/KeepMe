import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateAccoutfComponent } from './create-accoutf/create-accoutf.component';
import { CreatAccountVComponent } from './creat-account-v/creat-account-v.component';
import { FamSideBarComponent } from './fam-side-bar/fam-side-bar.component';
import { ServiceSearchComponent } from './service-search/service-search.component';
import { PrestataireProfileComponent } from './prestataire-profile/prestataire-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CreateAccoutfComponent,
    CreatAccountVComponent,
    FamSideBarComponent,
    ServiceSearchComponent,
    PrestataireProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
