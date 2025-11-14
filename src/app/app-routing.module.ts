import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAccoutfComponent } from './create-accoutf/create-accoutf.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreatAccountVComponent } from './creat-account-v/creat-account-v.component';
import { PrestataireProfileComponent } from './prestataire-profile/prestataire-profile.component';
import { ServiceSearchComponent } from './service-search/service-search.component';
import { PageAcceuil } from './page-acceuil/page-acceuil';
import { ReservationComponent } from './reservation/reservation.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CoordonneesComponent } from './coordonnees/coordonnees.component';
import { ReservationPresComponent } from './reservation-pres/reservation-pres.component';

import { PageAccueilPrestataireComponent } from './page-accueil-prestataire/page-accueil-prestataire.component';
import { ProfilPrestataireComponent } from './profil-prestataire/profil-prestataire.component';
import { PageInvitationPrestataireComponent } from './page-invitation-prestataire/page-invitation-prestataire.component';
import { PageMessagePrestataireComponent } from './page-message-prestataire/page-message-prestataire.component';
import { PageHistoriquePrestataireComponent } from './page-historique-prestataire/page-historique-prestataire.component';

const routes: Routes = [
  // racine - page générale (ex: utilisateurs/jobseekers)
  { path: '', component: PageAcceuil, pathMatch: 'full' },

  // pages générales / utilisateur
  { path: 'login', component: LogInComponent },
  { path: 'famcreate', component: CreatAccountVComponent },
  { path: 'presaccount', component: PrestataireProfileComponent },
  { path: 'service', component: ServiceSearchComponent },
  { path: 'jobseekercreate', component: CreateAccoutfComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'mon-profil', component: MonProfilComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'coordonnees', component: CoordonneesComponent },
  { path: 'respres', component: ReservationPresComponent },

  // routes de service (filtre par type)
  { path: 'babysitter', component: ServiceSearchComponent, data: { service: 'babysitter' } },
  { path: 'petsitter', component: ServiceSearchComponent, data: { service: 'petsitter' } },
  { path: 'dame-accompagnement', component: ServiceSearchComponent, data: { service: 'dame-accompagnement' } },

  // pages prestataire (Eya)
  { path: 'accueil', component: PageAccueilPrestataireComponent },
  { path: 'profil', component: ProfilPrestataireComponent },
  { path: 'invitations', component: PageInvitationPrestataireComponent },
  { path: 'message', component: PageMessagePrestataireComponent },
  { path: 'historique', component: PageHistoriquePrestataireComponent },
  // route vers la page générale si besoin
  { path: 'page-accueil', component: PageAcceuil },

  // wildcard -> renvoie à la racine (page générale)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
