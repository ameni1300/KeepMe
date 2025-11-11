import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { PageAcceuil } from './page-acceuil/page-acceuil';
import { HeroComponent } from './hero/hero.component';
import { Header } from './header/header';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeroComponent,
    PageAcceuil,
    Header 
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
