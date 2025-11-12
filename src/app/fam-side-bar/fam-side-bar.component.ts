import { Component } from '@angular/core';

interface Service {
  name: string;
  icon: string;
  emoji?: string;
  color?: string;
}

interface MenuItem {
  label: string;
  icon: string;
  badge?: number;
  active?: boolean;
}

@Component({
  selector: 'app-fam-side-bar',
  templateUrl: './fam-side-bar.component.html',
  styleUrls: ['./fam-side-bar.component.scss']
})
export class FamSideBarComponent {
  isServicesExpanded: boolean = true;
  
  services: Service[] = [
    { name: 'Babysitter', icon: '👶', color: '#FF6B6B' },
    { name: 'Petsitter', icon: '🐾',  color: '#4ECDC4' },
    { name: 'Dame d\'accompagnement', icon: '❤️', color: '#45B7D1' }
  ];

  menuItems: MenuItem[] = [
    { label: 'Mes réservations', icon: '📅' },
    { label: 'Messagerie', icon: '💬' },
    { label: 'Mon profil', icon: '👤' }
  ];

  toggleServices() {
    this.isServicesExpanded = !this.isServicesExpanded;
  }

  onServiceClick(service: Service) {
    console.log('Service sélectionné:', service.name);
    // Ajouter la logique de navigation ici
  }

  onMenuClick(item: MenuItem) {
    console.log('Menu cliqué:', item.label);
    // Mettre à jour l'état actif
    this.menuItems.forEach(menuItem => menuItem.active = false);
    item.active = true;
  }

  onLogout() {
    console.log('Déconnexion');
    // Ajouter la logique de déconnexion ici
  }
}