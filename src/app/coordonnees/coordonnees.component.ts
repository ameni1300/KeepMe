import { Component } from '@angular/core';

@Component({
  selector: 'app-coordonnees',
  templateUrl: './coordonnees.component.html',
  styleUrls: ['./coordonnees.component.scss']
})
export class CoordonneesComponent {
  // Données de la réservation
  reservation = {
    prestataire: 'Eya Ziri',
    service: 'Babysitter',
    tarif: 40
  };

  // Coordonnées utilisateur
  coordonnees = {
    nomComplet: 'Ameni',
    email: 'ameni@gmail.com',
    telephone: '',
    methodeContact: '' // 'telephone', 'email', 'sms'
  };

  // Méthodes de contact
  methodesContact = [
    { id: 'telephone', nom: 'Téléphone', icon: '📞', selected: false },
    { id: 'email', nom: 'E-Mail', icon: '✉️', selected: false },
    { id: 'sms', nom: 'SMS', icon: '💬', selected: false }
  ];

  // Méthodes
  selectionnerMethodeContact(methode: any) {
    this.methodesContact.forEach(m => m.selected = false);
    methode.selected = true;
    this.coordonnees.methodeContact = methode.id;
  }

  validerReservation() {
    // Validation des champs obligatoires
    if (!this.coordonnees.nomComplet || !this.coordonnees.email || !this.coordonnees.telephone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!this.coordonnees.methodeContact) {
      alert('Veuillez sélectionner une méthode de contact');
      return;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.coordonnees.email)) {
      alert('Veuillez entrer une adresse email valide');
      return;
    }

    // Validation du téléphone (format tunisien)
    const phoneRegex = /^[259]\d{7}$/;
    if (!phoneRegex.test(this.coordonnees.telephone.replace(/\s/g, ''))) {
      alert('Veuillez entrer un numéro de téléphone tunisien valide (8 chiffres)');
      return;
    }

    // Logique de réservation
    console.log('Réservation validée:', {
      reservation: this.reservation,
      coordonnees: this.coordonnees
    });

    alert(`Réservation confirmée !\nVous recevrez une confirmation par ${this.getMethodeContactNom()}`);
    
    // Ici vous redirigeriez vers la page de confirmation ou de paiement
  }

  annulerReservation() {
    if (confirm('Êtes-vous sûr de vouloir annuler la réservation ?')) {
      console.log('Réservation annulée');
      // Redirection vers la page précédente
    }
  }

  getMethodeContactNom(): string {
    const methode = this.methodesContact.find(m => m.selected);
    return methode ? methode.nom : '';
  }

  // Formatage du téléphone
  formaterTelephone(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 8) {
      value = value.substring(0, 8);
    }
    
    // Format: XX XXX XXX
    if (value.length > 2) {
      value = value.substring(0, 2) + ' ' + value.substring(2);
    }
    if (value.length > 6) {
      value = value.substring(0, 6) + ' ' + value.substring(6);
    }
    
    this.coordonnees.telephone = value;
  }
}