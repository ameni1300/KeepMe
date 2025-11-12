import { Component } from '@angular/core';

@Component({
  selector: 'app-page-historique-prestataire',
  templateUrl: './page-historique-prestataire.component.html',
  styleUrls: ['./page-historique-prestataire.component.scss']
})
export class PageHistoriquePrestataireComponent {

clients = [
    {
      nom: 'Souaad Ismail',
      photo: 'assets/client3.jpg',
      localisation: 'Ariana',
      tarif: 15,
      duree: '3 jours',
      dateDebut: '12/05/2025',
      dateFin: '15/05/2025',
      service: 'Pet-sitter'
    },
    {
      nom: 'Rim Goutali',
      photo: 'assets/client2.jpg',
      localisation: 'Ariana',
      tarif: 15,
      duree: '3 jours',
      dateDebut: '20/05/2025',
      dateFin: '23/05/2025',
      service: 'Pet-sitter'
    },
    {
      nom: 'Ameni Zakraoui',
      photo: 'assets/client1.jpg',
      localisation: 'Ariana',
      tarif: 15,
      duree: '1 jour',
      dateDebut: '12/09/2025',
      dateFin: '',
      service: 'Baby-sitter'
    }
  ];
}
