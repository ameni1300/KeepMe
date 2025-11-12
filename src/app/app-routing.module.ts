import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilPrestataireComponent } from './page-accueil-prestataire/page-accueil-prestataire.component';
import { ProfilPrestataireComponent } from './profil-prestataire/profil-prestataire.component';
import { PageInvitationPrestataireComponent } from './page-invitation-prestataire/page-invitation-prestataire.component';
import { PageMessagePrestataireComponent } from './page-message-prestataire/page-message-prestataire.component';
import { PageHistoriquePrestataireComponent } from './page-historique-prestataire/page-historique-prestataire.component';
import { PageAcceuil } from './page-acceuil/page-acceuil';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: PageAccueilPrestataireComponent },
  { path: 'profil', component: ProfilPrestataireComponent },
  { path: 'invitations', component: PageInvitationPrestataireComponent },
  { path: 'message', component: PageMessagePrestataireComponent },
  { path: 'historique', component: PageHistoriquePrestataireComponent },
  { path: 'page-accueil', component: PageAcceuil }, // <-- route vers page générale
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
