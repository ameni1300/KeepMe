import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Service {
  name: string;
  icon: string;
  emoji?: string;
  color?: string;
  route?: string;
}

interface MenuItem {
  label: string;
  icon: string;
  badge?: number;
  active?: boolean;
  route?: string;
}

@Component({
  selector: 'app-fam-side-bar',
  templateUrl: './fam-side-bar.component.html',
  styleUrls: ['./fam-side-bar.component.scss']
})
export class FamSideBarComponent {
  isServicesExpanded: boolean = true;
  
  services: Service[] = [
    { 
      name: 'Babysitter', 
      icon: '👶', 
      color: '#FF6B6B',
      route: '/babysitter'
    },
    { 
      name: 'Petsitter', 
      icon: '🐾',  
      color: '#4ECDC4',
      route: '/petsitter'
    },
    { 
      name: 'Dame d\'accompagnement', 
      icon: '❤️', 
      color: '#45B7D1',
      route: '/dame-accompagnement'
    }
  ];

  menuItems: MenuItem[] = [
    { 
      label: 'Mes réservations', 
      icon: '📅',
      route: '/reservation'
    },
    { 
      label: 'Messagerie', 
      icon: '💬',
      route: '/messagerie'
    },
    { 
      label: 'Mon profil', 
      icon: '👤',
      route: '/mon-profil'
    }
  ];

  constructor(private router: Router) {}

  toggleServices() {
    this.isServicesExpanded = !this.isServicesExpanded;
  }

  onServiceClick(service: Service) {
    console.log('Service sélectionné:', service.name);
    if (service.route) {
      this.router.navigate([service.route]);
    }
    // Fermer la liste des services après sélection (optionnel)
    this.isServicesExpanded = false;
  }

  onMenuClick(item: MenuItem) {
    console.log('Menu cliqué:', item.label);
    
    // Mettre à jour l'état actif visuel
    this.menuItems.forEach(menuItem => menuItem.active = false);
    item.active = true;

    // Navigation
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  onLogout() {
    console.log('Déconnexion');
    // Ajouter la logique de déconnexion ici
    // Par exemple : this.authService.logout();
    this.router.navigate(['/']);
  }

  // Méthode pour vérifier si une route est active
  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}