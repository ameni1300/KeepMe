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
      service: 'Pet-sitter',
      rating: 4.5,
      totalRatings: 12
    },
    {
      nom: 'Rim Goutali',
      photo: 'assets/client2.jpg',
      localisation: 'Ariana',
      tarif: 15,
      duree: '3 jours',
      dateDebut: '20/05/2025',
      dateFin: '23/05/2025',
      service: 'Pet-sitter',
      rating: 3.0,
      totalRatings: 8
    },
    {
      nom: 'Ameni Zakraoui',
      photo: 'assets/client1.jpg',
      localisation: 'Ariana',
      tarif: 15,
      duree: '1 jour',
      dateDebut: '12/09/2025',
      dateFin: '',
      service: 'Baby-sitter',
      rating: 5.0,
      totalRatings: 20
    }
  ];

  showRatingPopup = false;
  selectedClient: any = null;

  openRatingPopup(client: any) {
  this.selectedClient = client;
  this.showRatingPopup = true;
}

closeRatingPopup() {
  this.showRatingPopup = false;
  this.selectedClient = null;
}

getStars(rating: number): { filled: number, empty: number } {
  const filled = Math.floor(rating);
  const empty = 5 - Math.ceil(rating);
  return { filled, empty };
}

}