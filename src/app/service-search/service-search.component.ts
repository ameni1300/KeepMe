import { Component } from '@angular/core';

interface Profile {
  name: string;
  age: number;
  location: string;
  price: string;
  availability: string;
}

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: ['./service-search.component.scss']
})
export class ServiceSearchComponent {
  profiles: Profile[] = [
    {
      name: 'Souaad Ismail',
      age: 25,
      location: 'Adama',
      price: '15DT',
      availability: '7/7'
    },
    {
      name: 'Eya Ziri',
      age: 25,
      location: 'Adama',
      price: '15DT',
      availability: '7/7'
    },
    {
      name: 'Ahmed Khalil',
      age: 25,
      location: 'Adama',
      price: '15DT',
      availability: '7/7'
    },
    {
      name: 'Salma Ben Slimen',
      age: 25,
      location: 'Adama',
      price: '15DT',
      availability: '7/7'
    }
  ];

  onViewProfile(profile: Profile) {
    console.log('Voir profil:', profile.name);
    // Implémentez la logique pour voir le profil
  }

  onSearch() {
    console.log('Recherche lancée');
    // Implémentez la logique de recherche
  }

  onFilter() {
    console.log('Ouvrir les filtres');
    // Implémentez la logique des filtres
  }

  onLogout() {
    console.log('Déconnexion');
    // Implémentez la logique de déconnexion
  }
}