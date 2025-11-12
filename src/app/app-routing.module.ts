import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccoutfComponent } from './create-accoutf/create-accoutf.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreatAccountVComponent } from './creat-account-v/creat-account-v.component';
import { PrestataireProfileComponent } from './prestataire-profile/prestataire-profile.component';
import { ServiceSearchComponent } from './service-search/service-search.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'famcreate', component: CreatAccountVComponent },
  { path: 'presaccount', component: PrestataireProfileComponent },
  { path: 'service', component: ServiceSearchComponent },

  { path: 'jobseekercreate', component: CreateAccoutfComponent },
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }