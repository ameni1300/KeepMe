import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // BehaviorSubject permet de suivre l'état de connexion
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Observable que les composants peuvent écouter
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() { }

  // Appeler cette méthode lors de la connexion
  login() {
    this.loggedIn.next(true);
  }

  // Appeler cette méthode lors de la déconnexion
  logout() {
    this.loggedIn.next(false);
  }
}
