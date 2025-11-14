import { Component, OnInit } from '@angular/core';

interface Appointment {
  date: Date;
  time: string;
  client: string;
  location: string;
  duration: string;
}

@Component({
  selector: 'app-page-accueil-prestataire',
  templateUrl: './page-accueil-prestataire.component.html',
  styleUrls: ['./page-accueil-prestataire.component.scss']
})
export class PageAccueilPrestataireComponent implements OnInit {
  currentDate: Date = new Date(2026, 0, 1); // Janvier 2026
  weeks: Date[][] = [];
  appointments: Appointment[] = [];

  ngOnInit() {
    this.generateCalendar();
    this.initializeAppointments();
  }

  generateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    this.weeks = [];
    let currentWeek: Date[] = [];
    
    // Ajouter les jours vides du début
    for (let i = 0; i < firstDay.getDay(); i++) {
      currentWeek.push(new Date(year, month, 0 - i));
    }
    currentWeek.reverse();
    
    // Ajouter tous les jours du mois
    for (let day = 1; day <= lastDay.getDate(); day++) {
      currentWeek.push(new Date(year, month, day));
      
      if (currentWeek.length === 7) {
        this.weeks.push([...currentWeek]);
        currentWeek = [];
      }
    }
    
    // Ajouter les jours vides de la fin
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(new Date(year, month + 1, currentWeek.length - 6));
      }
      this.weeks.push(currentWeek);
    }
  }

  initializeAppointments(): void {
    this.appointments = [
      {
        date: new Date(2026, 0, 7),
        time: '18h',
        client: 'Mme Rim Ziri',
        location: 'Cité la gazelle',
        duration: '3 jours'
      },
      {
        date: new Date(2026, 0, 8),
        time: '18h',
        client: 'Mme Rim Ziri',
        location: 'Cité la gazelle',
        duration: '3 jours'
      },
      {
        date: new Date(2026, 0, 9),
        time: '18h',
        client: 'Mme Rim Ziri',
        location: 'Cité la gazelle',
        duration: '3 jours'
      },
      {
        date: new Date(2026, 0, 17),
        time: '13h',
        client: 'Mr Ezzedine',
        location: 'Ariana',
        duration: ''
      }
    ];
  }

  getAppointmentsForDate(date: Date): Appointment[] {
    return this.appointments.filter(app => 
      app.date.getDate() === date.getDate() && 
      app.date.getMonth() === date.getMonth() &&
      app.date.getFullYear() === date.getFullYear()
    );
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentDate.getMonth() && 
           date.getFullYear() === this.currentDate.getFullYear();
  }

  getMonthYearString(): string {
    return this.currentDate.toLocaleDateString('fr-FR', { 
      month: 'long', 
      year: 'numeric' 
    });
  }
}