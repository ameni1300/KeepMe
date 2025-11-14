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
const routes: Routes = [
  // 👉 La page d'accueil s'affiche au chargement initial :
  { path: '', component: PageAcceuil, pathMatch: 'full' },

  // Les autres routes :
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

  // Routes pour les services
  { path: 'babysitter', component: ServiceSearchComponent, data: { service: 'babysitter' } },
  { path: 'petsitter', component: ServiceSearchComponent, data: { service: 'petsitter' } },
  { path: 'dame-accompagnement', component: ServiceSearchComponent, data: { service: 'dame-accompagnement' } },

  // Si la route n'existe pas, on redirige vers l'accueil :
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }