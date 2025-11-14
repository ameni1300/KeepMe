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
import { PageAcceuil } from './page-acceuil/page-acceuil';
import { HeroComponent } from './hero/hero.component';
import { Header } from './header/header';
import { ReservationComponent } from './reservation/reservation.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { FormsModule } from '@angular/forms';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { ReservationPresComponent } from './reservation-pres/reservation-pres.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CoordonneesComponent } from './coordonnees/coordonnees.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CreateAccoutfComponent,
    CreatAccountVComponent,
    FamSideBarComponent,
    ServiceSearchComponent,
    PrestataireProfileComponent,
    HeroComponent,
    PageAcceuil,
    Header,
    ReservationComponent,
    MessagerieComponent,
    MonProfilComponent,
    ReservationPresComponent,
    PaiementComponent,
    CoordonneesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
