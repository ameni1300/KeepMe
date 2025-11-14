import { Component } from '@angular/core';

interface Reservation {
  id: number;
  providerName: string;
  service: string;
  period: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  providerImage?: string;
  price?: number;
  location?: string;
  rating?: number;
}
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  activeTab: 'upcoming' | 'completed' | 'cancelled' = 'upcoming';
  userName: string = 'Ameni';

  reservations: Reservation[] = [
    {
      id: 1,
      providerName: 'Sousad Ismail',
      service: 'Petsitter',
      period: '15 juin - 18 juin',
      status: 'upcoming',
      price: 120,
      location: 'Ariana',
      rating: 4
    },
    {
      id: 2,
      providerName: 'Eye Ziri',
      service: 'Babysitter',
      period: '20 juin - 22 juin',
      status: 'upcoming',
      price: 80,
      location: 'Tunis',
      rating: 5
    },
    {
      id: 3,
      providerName: 'Marie Dupont',
      service: 'Dame d\'accompagnement',
      period: '10 juin - 12 juin',
      status: 'completed',
      price: 90,
      location: 'Lac',
      rating: 4
    },
    {
      id: 4,
      providerName: 'John Smith',
      service: 'Petsitter',
      period: '5 juin - 7 juin',
      status: 'cancelled',
      price: 60,
      location: 'Carthage'
    }
  ];

  get filteredReservations() {
    return this.reservations.filter(reservation => reservation.status === this.activeTab);
  }

  getUpcomingCount(): number {
    return this.reservations.filter(r => r.status === 'upcoming').length;
  }
getTabDisplayName(): string {
  switch (this.activeTab) {
    case 'upcoming':
      return 'à venir';
    case 'completed':
      return 'terminées';
    case 'cancelled':
      return 'annulées';
    default:
      return '';
  }
}

getStatusDisplayName(status: string): string {
  switch (status) {
    case 'upcoming':
      return 'À venir';
    case 'completed':
      return 'Terminée';
    case 'cancelled':
      return 'Annulée';
    default:
      return status;
  }
}
  getCompletedCount(): number {
    return this.reservations.filter(r => r.status === 'completed').length;
  }

  getCancelledCount(): number {
    return this.reservations.filter(r => r.status === 'cancelled').length;
  }

  setActiveTab(tab: 'upcoming' | 'completed' | 'cancelled') {
    this.activeTab = tab;
  }

  getServiceIcon(service: string): string {
    switch (service.toLowerCase()) {
      case 'babysitter':
        return '👶';
      case 'petsitter':
        return '🐾';
      case 'dame d\'accompagnement':
        return '❤️';
      default:
        return '📅';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'upcoming':
        return '#e3a03b';
      case 'completed':
        return '#48bb78';
      case 'cancelled':
        return '#e53e3e';
      default:
        return '#718096';
    }
  }

  manageReservation(reservation: Reservation) {
    console.log('Gérer la réservation:', reservation);
    // Logique pour gérer la réservation
  }

  contactProvider(reservation: Reservation) {
    console.log('Contacter le prestataire:', reservation.providerName);
    // Logique pour contacter le prestataire
  }

  cancelReservation(reservation: Reservation) {
    console.log('Annuler la réservation:', reservation.id);
    // Logique pour annuler la réservation
  }

  rateReservation(reservation: Reservation) {
    console.log('Noter la réservation:', reservation.id);
    // Logique pour noter la réservation
  }
}
