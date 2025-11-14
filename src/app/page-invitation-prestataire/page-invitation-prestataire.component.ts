import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-invitation-prestataire',
  templateUrl: './page-invitation-prestataire.component.html',
  styleUrls: ['./page-invitation-prestataire.component.scss']
})
export class PageInvitationPrestataireComponent {

  constructor(private router: Router) {}

  invitations = [
    {
      id: 1,
      clientNom: 'Rim Goutali',
      localisation: 'Bizerte',
      enfants: 2,
      animal: '',
      role: 'Baby-sitting',
      dateDebut: '18/12/2025',
      dateFin: '21/12/2025',
      duree: '3 jours',
      dateEnvoi: '12/12/2025 à 10:30',
      statut: 'en_attente'
    },
    {
      id: 2,
      clientNom: 'Ameni Ben Salem',
      localisation: 'Sousse',
      enfants: 0,
      animal: '🐶 Chien',
      role: 'Pet-sitting',
      dateDebut: '20/12/2025',
      dateFin: '21/12/2025',
      duree: '1 jour',
      dateEnvoi: '15/12/2025 à 14:50',
      statut: 'en_attente'
    },
    {
      id: 3,
      clientNom: 'Ameni Zakraoui',
      localisation: 'Ariana',
      enfants: 0,
      animal: ' Chat',
      role: 'Pet-sitting',
      dateDebut: '01/01/2026',
      dateFin: '07/01/2026',
      duree: '7 jour',
      dateEnvoi: '16/12/2025 à 14:50',
      statut: 'en_attente'
    }
  ];

  // Accepter → bloque Refuser
  accepter(invitation: any) {
    invitation.statut = 'accepte';
  }

  // Refuser → supprimer l’offre
  refuser(invitation: any) {
    this.invitations = this.invitations.filter(i => i.id !== invitation.id);
  }

  // Redirection vers la page message
  goToMessages() {
    this.router.navigate(['/message']);
  }
}
