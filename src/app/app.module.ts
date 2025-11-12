import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { PageAcceuil } from './page-acceuil/page-acceuil';
import { HeroComponent } from './hero/hero.component';
import { Header } from './header/header';
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
    HeroComponent,
    PageAcceuil,
    Header,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
