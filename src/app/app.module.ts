import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { ReservationPresComponent } from './reservation-pres/reservation-pres.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CoordonneesComponent } from './coordonnees/coordonnees.component';

import { SidebarPrestataireComponent } from './sidebar-prestataire/sidebar-prestataire.component';
import { PageAccueilPrestataireComponent } from './page-accueil-prestataire/page-accueil-prestataire.component';
import { ProfilPrestataireComponent } from './profil-prestataire/profil-prestataire.component';
import { PageInvitationPrestataireComponent } from './page-invitation-prestataire/page-invitation-prestataire.component';
import { PageMessagePrestataireComponent } from './page-message-prestataire/page-message-prestataire.component';
import { PageHistoriquePrestataireComponent } from './page-historique-prestataire/page-historique-prestataire.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,

    // tes composants (ameni-branch)
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
    CoordonneesComponent,

    // composants d'Eya (eya-branch)
    SidebarPrestataireComponent,
    PageAccueilPrestataireComponent,
    ProfilPrestataireComponent,
    PageInvitationPrestataireComponent,
    PageMessagePrestataireComponent,
    PageHistoriquePrestataireComponent
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
