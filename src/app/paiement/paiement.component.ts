import { Component } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent {
  // Données de la réservation
  reservation = {
    prestataire: 'Eya Ziri',
    service: 'Babysitter',
    tarifHoraire: 10,
    duree: 4,
    total: 40
  };

  // Moyens de paiement
  moyensPaiement = [
    { id: 'carte', nom: 'Carte bancaire', icon: '💳', selected: true },
    { id: 'paypal', nom: 'PayPal', icon: '🔵', selected: false },
    { id: 'especes', nom: 'Espèces (à la fin)', icon: '💵', selected: false }
  ];

  // Données de la carte (pour le formulaire)
  carteData = {
    numero: '',
    nom: '',
    expiration: '',
    cvv: ''
  };

  // Politique d'annulation
  politiqueAnnulation = {
    gratuitJusqua: '24h avant le début',
    penalite: '50% du montant'
  };

  // Méthodes
  selectionnerPaiement(methode: any) {
    this.moyensPaiement.forEach(m => m.selected = false);
    methode.selected = true;
  }

  getMethodePaiementSelectionnee() {
    return this.moyensPaiement.find(m => m.selected);
  }

  validerPaiement() {
    const methode = this.getMethodePaiementSelectionnee();
    
    if (methode?.id === 'carte') {
      // Validation des données de la carte
      if (!this.carteData.numero || !this.carteData.nom || !this.carteData.expiration || !this.carteData.cvv) {
        alert('Veuillez remplir tous les champs de la carte bancaire');
        return;
      }
    }

    // Logique de paiement
    console.log('Paiement validé:', {
      reservation: this.reservation,
      methodePaiement: methode,
      carteData: methode?.id === 'carte' ? this.carteData : null
    });

    alert(`Paiement de ${this.reservation.total} DT effectué avec succès !\nMéthode: ${methode?.nom}`);
  }

  annulerPaiement() {
    if (confirm('Êtes-vous sûr de vouloir annuler le paiement ?')) {
      console.log('Paiement annulé');
      // Redirection vers la page précédente
    }
  }

  // Calcul du total
  calculerTotal(): number {
    return this.reservation.tarifHoraire * this.reservation.duree;
  }
}