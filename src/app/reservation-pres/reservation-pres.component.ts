import { Component } from '@angular/core';

interface JourCalendrier {
  date: string; // Format: 'YYYY-MM-DD'
  jourSemaine: string;
  jourMois: number;
  mois: string;
  annee: number;
  disponible: boolean;
  selectionne: boolean;
}

@Component({
  selector: 'app-reservation-pres',
  templateUrl: './reservation-pres.component.html',
  styleUrls: ['./reservation-pres.component.scss']
})


export class ReservationPresComponent {



  // Données de la prestation
  prestation = {
    nom: 'Eya Ziri',
    service: 'Babysitter',
    tarif: 10,
    periode: '/ H'
  };

  // Détails de la prestation
  details = {
    adresse: '',
    date: '',
    duree: '',
    nombreEnfants: '',
    besoinsParticuliers: '',
    ageEnfants: '',
    langues: ''
  };

  // Calendrier
  moisEnCours: Date = new Date();
  joursCalendrier: JourCalendrier[] = [];
  joursSelectionnes: string[] = [];

  // Jours occupés du prestataire (exemple)
  joursOccupes = [
    '2025-11-22',
    '2025-11-24',
    '2025-11-26'
  ];

  constructor() {
    this.genererCalendrier();
  }

  // Générer le calendrier pour le mois en cours
  genererCalendrier() {
    this.joursCalendrier = [];
    const annee = this.moisEnCours.getFullYear();
    const mois = this.moisEnCours.getMonth();
    
    // Premier jour du mois
    const premierJour = new Date(annee, mois, 1);
    // Dernier jour du mois
    const dernierJour = new Date(annee, mois + 1, 0);
    
    // Jours de la semaine en français
    const joursSemaine = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    // Mois en français
    const moisNoms = ['janv.', 'fév.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

    // Générer tous les jours du mois
    for (let jour = 1; jour <= dernierJour.getDate(); jour++) {
      const date = new Date(annee, mois, jour);
      const dateStr = this.formaterDate(date);
      const disponible = !this.joursOccupes.includes(dateStr);
      
      this.joursCalendrier.push({
        date: dateStr,
        jourSemaine: joursSemaine[date.getDay()],
        jourMois: jour,
        mois: moisNoms[mois],
        annee: annee,
        disponible: disponible,
        selectionne: this.joursSelectionnes.includes(dateStr)
      });
    }
  }

  // Formater la date en YYYY-MM-DD
  formaterDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  // Sélectionner/désélectionner un jour
  selectionnerJour(jour: JourCalendrier) {
    if (!jour.disponible) return;

    const index = this.joursSelectionnes.indexOf(jour.date);
    
    if (index === -1) {
      // Ajouter la sélection
      this.joursSelectionnes.push(jour.date);
      jour.selectionne = true;
    } else {
      // Retirer la sélection
      this.joursSelectionnes.splice(index, 1);
      jour.selectionne = false;
    }

    // Mettre à jour la date dans les détails
    this.mettreAJourDateSelectionnee();
  }

  // Mettre à jour le champ date avec les jours sélectionnés
  mettreAJourDateSelectionnee() {
    if (this.joursSelectionnes.length === 0) {
      this.details.date = '';
      return;
    }

    // Trier les dates
    const datesTriees = this.joursSelectionnes.sort();
    
    if (datesTriees.length === 1) {
      // Un seul jour sélectionné
      const date = new Date(datesTriees[0]);
      this.details.date = `${date.getDate()} ${this.getMoisNom(date.getMonth())} ${date.getFullYear()}`;
    } else {
      // Plusieurs jours sélectionnés
      const premier = new Date(datesTriees[0]);
      const dernier = new Date(datesTriees[datesTriees.length - 1]);
      
      if (premier.getMonth() === dernier.getMonth()) {
        // Même mois
        this.details.date = `Du ${premier.getDate()} au ${dernier.getDate()} ${this.getMoisNom(premier.getMonth())} ${premier.getFullYear()}`;
      } else {
        // Mois différents
        this.details.date = `Du ${premier.getDate()} ${this.getMoisNom(premier.getMonth())} au ${dernier.getDate()} ${this.getMoisNom(dernier.getMonth())} ${premier.getFullYear()}`;
      }
    }
  }

  // Obtenir le nom du mois
  getMoisNom(mois: number): string {
    const moisNoms = ['janv.', 'fév.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
    return moisNoms[mois];
  }

  // Navigation dans le calendrier
  moisPrecedent() {
    this.moisEnCours = new Date(this.moisEnCours.getFullYear(), this.moisEnCours.getMonth() - 1, 1);
    this.genererCalendrier();
  }

  moisSuivant() {
    this.moisEnCours = new Date(this.moisEnCours.getFullYear(), this.moisEnCours.getMonth() + 1, 1);
    this.genererCalendrier();
  }

  // Obtenir le nom du mois en cours
  getMoisEnCours(): string {
    const moisNoms = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return `${moisNoms[this.moisEnCours.getMonth()]} ${this.moisEnCours.getFullYear()}`;
  }

  validerReservation() {
    // Validation des champs obligatoires
    if (!this.details.adresse || this.joursSelectionnes.length === 0 || !this.details.duree || 
        !this.details.nombreEnfants || !this.details.ageEnfants || !this.details.langues) {
      alert('Veuillez remplir tous les champs obligatoires et sélectionner au moins une date');
      return;
    }

    // Logique de réservation
    const reservation = {
      ...this.details,
      datesSelectionnees: this.joursSelectionnes
    };

    console.log('Réservation validée:', reservation);
    alert(`Réservation effectuée avec succès pour ${this.joursSelectionnes.length} jour(s) !`);
  }

  annulerReservation() {
    if (confirm('Êtes-vous sûr de vouloir annuler la réservation ?')) {
      this.joursSelectionnes = [];
      this.details = {
        adresse: '',
        date: '',
        duree: '',
        nombreEnfants: '',
        besoinsParticuliers: '',
        ageEnfants: '',
        langues: ''
      };
      this.genererCalendrier();
      console.log('Réservation annulée');
    }
  }

}
