import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.html',
  styleUrls: ['./page-acceuil.scss']
})
export class PageAcceuil {
 
  selectedButton: 'prestataire' | 'client' = 'prestataire'; // Par défaut Prestataire

  // Steps pour Prestataire
  clientSteps = [
    
    {
      number: '1',
      image: '/assets/step1.jpg',
      alt: 'Créer un compte',
      title: 'Créez votre profil',
      description: 'Créez votre profil en quelques clics : indiquez vos coordonnées, précisez vos besoins et décrivez le type de service que vous recherchez. Plus votre profil est détaillé, plus vous augmentez vos chances d’être rapidement mis en relation avec un prestataire de confiance correspondant à vos attentes.'
    },
    {
      number: '2',
      image: '/assets/step2.png',
      alt: 'Choisir un service',
      title: 'Choisir un service',
      description: 'Choisissez le type de service que vous souhaitez proposer : babysitting, petsitting ou accompagnement des aînés. Sélectionnez celui qui correspond le mieux à vos compétences et à vos disponibilités pour commencer à offrir votre aide aux familles qui en ont besoin.'
    },
    {
      number: '3',
      image: '/assets/step3.png',
      alt: 'Moyens de paiement',
      title: 'Choisir un moyen de paiement',
      description: 'Choisissez le moyen de paiement qui vous convient le mieux : carte bancaire, portefeuille électronique ou virement. Sélectionnez l\'option la plus simple et sécurisée pour vous afin de garantir des transactions rapides et fiables lors de vos prestations.'
    }
  ];

  // Steps pour Prestatire
  prestataireSteps = [
    {
      number: '1',
      image: '/assets/step1.jpg',
      alt: 'Créer un compte',
      title: 'Créez votre profil',
      description: 'Créez votre profil en quelques clics : indiquez vos coordonnées, ajoutez vos certificats et décrivez vos expériences. Plus votre profil est complet, plus vous avez de chances d\'être contacté rapidement par des familles à la recherche de prestataires de confiance.'
    },
    {
      number: '2',
      image: '/assets/step5.jpg',
      alt: 'Gérer vos offres',
      title: 'Gérer vos offres',
      description: 'Recevez les offres d’emploi correspondant à vos services. Vous pouvez les consulter et choisir d’accepter ou de refuser chaque demande facilement.'
    },
    {
      number: '3',
      image: '/assets/step6.png',
      alt: 'Consulter votre historique',
      title: 'Consulter votre historique',
      description: 'Accédez à l’historique de vos prestations pour suivre les services effectués, vos gains et vos interactions avec les clients.'
    }

  ];

  get currentSteps() {
    return this.selectedButton === 'prestataire' ? this.prestataireSteps : this.clientSteps;
  }

  get currentCtaText() {
    return this.selectedButton === 'prestataire' ? 'Devenir Prestataire' : 'Trouver un Prestataire';
  }

  contactUs() {
    // Logique pour contacter
    alert('Formulaire de contact à implémenter');
  }

  createAccount() {
    // Logique pour créer un compte
    alert('Redirection vers la création de compte');
    // Vous pouvez rediriger vers la page d'inscription
    // this.router.navigate(['/register']);
  }

  selectButton(buttonType: 'prestataire' | 'client') {
    this.selectedButton = buttonType;
  }

  isSelected(buttonType: 'prestataire' | 'client'): boolean {
    return this.selectedButton === buttonType;
  }

  handleCtaClick() {
    if (this.selectedButton === 'prestataire') {
      this.createAccount();
    } else {
      this.findProvider();
    }
  }

  findProvider() {
    alert('Redirection vers la recherche de prestataires');
    // this.router.navigate(['/prestataires']);
  }

    currentTestimonialIndex = 0;
  
  testimonials = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet consectetur. Amet sed tellus elementum mauris. Libero maceenas eget tellus morbi diam enim euismod egestas. Adipiscing fringilla quis justo adipiscing eget oenean sollicitudin. Nibh ut sed sodales magna risus tellus. Nulla ut arcu ac justo blandit tincidunt ante. Tincidunt libero urna ut aliquet vitae nunc quisque sapien cursus.",
      author: "James Smith",
      company: "ABC Softwares",
      avatar: "JS"
    },
    {
      id: 2,
      content: "KeepMe a transformé notre quotidien. L'accompagnante qui vient aider ma mère est exceptionnelle - professionnelle, attentionnée et toujours de bonne humeur. Je recommande vivement ce service à toutes les familles qui cherchent un soutien fiable pour leurs proches.",
      author: "Marie Dubois",
      company: "Famille utilisatrice",
      avatar: "MD"
    },
    {
      id: 3,
      content: "En tant que prestataire sur KeepMe, je peux témoigner de la qualité de la plateforme. Les familles sont respectueuses, les paiements sont sécurisés et l'équipe de KeepMe est toujours disponible pour nous aider. Une vraie communauté de confiance !",
      author: "Sophie Petit",
      company: "Accompagnante certifiée",
      avatar: "SP"
    },
    {
      id: 4,
      content: "Service impeccable pour la garde de nos enfants. Les babysitters sont triés sur le volet, les profils sont détaillés et le système de réservation est simple. Nous avons trouvé LA perle rare grâce à KeepMe !",
      author: "Thomas Martin",
      company: "Parent utilisateur",
      avatar: "TM"
    }
  ];

  // Navigation du slider
  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentTestimonialIndex = index;
  }

  // Auto-play optionnel
  startAutoPlay() {
    setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Change toutes les 5 secondes
  }

  ngOnInit() {
    // Démarre l'auto-play au chargement de la page
    this.startAutoPlay();
  }

// Données pour le footer
  footerData = {
    contact: {
      title: "Vous avez une question, une suggestion ou besoin d'assistance ?",
      description: "Notre équipe est à votre écoute pour vous accompagner à chaque étape.",
      email: "contact@KeepMe.com",
      phone: "+216 93 103 987"
    },
    mission: "Mettre en relation bénévoles et personnes âgées pour rompre l'isolement et favoriser le bien-être.",
    quickLinks: [
      { label: "Accueil", path: "/" },
      { label: "À propos de nous", path: "/about" },
      { label: "Services", path: "/services" }
    ],
    legalLinks: [
      { label: "Conditions d'utilisation", path: "/terms" },
      { label: "Politique de confidentialité", path: "/privacy" }
    ]
  };

    // Pour l'année du copyright
  currentYear: number = new Date().getFullYear();
}

