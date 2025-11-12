import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccoutfComponent } from './create-accoutf/create-accoutf.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreatAccountVComponent } from './creat-account-v/creat-account-v.component';
import { PrestataireProfileComponent } from './prestataire-profile/prestataire-profile.component';
import { ServiceSearchComponent } from './service-search/service-search.component';
import { PageAcceuil } from './page-acceuil/page-acceuil';
import { ReservationComponent } from './reservation/reservation.component';
const routes: Routes = [
  // 👉 La page d’accueil s’affiche au chargement initial :
  { path: '', component: PageAcceuil, pathMatch: 'full' },

  // Les autres routes :
  { path: 'login', component: LogInComponent },
  { path: 'famcreate', component: CreatAccountVComponent },
  { path: 'presaccount', component: PrestataireProfileComponent },
  { path: 'service', component: ServiceSearchComponent },
  { path: 'jobseekercreate', component: CreateAccoutfComponent },
  { path: 'reservartion', component: ReservationComponent },

  // Si la route n’existe pas, on redirige vers l’accueil :
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
