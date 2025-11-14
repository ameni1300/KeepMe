import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Review {
  rating: number;
  comment: string;
}

interface Education {
  period: string;
  diploma: string;
  certificate?: string;
}

interface Language {
  name: string;
  level: string;
  isNative?: boolean;
}
@Component({
  selector: 'app-prestataire-profile',
  templateUrl: './prestataire-profile.component.html',
  styleUrls: ['./prestataire-profile.component.scss']
})
export class PrestataireProfileComponent {
 babysitter = {
    name: 'Eye Ziri',
    age: 25,
    phone: '+216 92172 893',
    price: 20,
    priceUnit: 'jour',
    availability: '7/7',
    location: 'Ariana',
    about: `Bonjour, je m'appelle Eye, j'ai 25 ans et je suis passionnée par le contact avec les enfants. J'ai plus de 3 ans d'expérience en garde d'enfants à domicile et en animation dans les centres de loisirs. Je suis patiente, ponctuelle et toujours à l'écoute des besoins des enfants et des parents. Je peux aider aux devoirs, préparer les repas et organiser des activités ludiques adaptées à l'âge de vos enfants.`,
    services: [
      'Garde à domicile',
      'Aide aux devoirs',
      'Préparation de repas',
      'Accompagnement à l\'école'
    ]
  };

  education: Education[] = [
    {
      period: '2021-2024',
      diploma: 'Diplôme en psychologie de l\'enfant',
      certificate: 'Certificat de premiers secours'
    }
  ];

  languages: Language[] = [
    { name: 'Arabe', level: 'Langue maternelle', isNative: true },
    { name: 'Français', level: 'B2' },
    { name: 'Anglais', level: 'B2' }
  ];

  reviews: Review[] = [
    {
      rating: 4,
      comment: 'Eye est adorable et très patiente avec mes deux enfants. Elle a su instaurer une belle relation de confiance dès le premier jour. Je referai appel à elle sans hésiter !'
    },
    {
      rating: 4,
      comment: 'Toujours ponctuelle et à l\'écoute. Mes enfants demandent quand elle revient 😊 Excellent service !'
    }
  ];

  cvFile = 'EyeZiri-CV.pdf';
  constructor(private router: Router) {}
  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  

  downloadCV() {
    console.log('Télécharger le CV:', this.cvFile);
    // Logique pour télécharger le CV
  }
}
