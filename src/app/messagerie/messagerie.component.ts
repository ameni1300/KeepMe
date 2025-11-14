import { Component } from '@angular/core';

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  unreadCount?: number;
  avatar?: string;
  online: boolean;
  serviceType: string;
}

interface Message {
  id: number;
  content: string;
  time: string;
  isSender: boolean;
  status: 'sent' | 'delivered' | 'read';
}

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieComponent {
  conversations: Conversation[] = [
    {
      id: 1,
      name: 'Sousad Ismail',
      lastMessage: 'Bonjour, je suis disponible pour garder votre chien ce weekend',
      time: '10:30',
      unread: true,
      unreadCount: 2,
      online: true,
      serviceType: 'Petsitter'
    },
    {
      id: 2,
      name: 'Eye Ziri',
      lastMessage: 'Merci pour votre confiance ! À demain pour la garde des enfants',
      time: '09:15',
      unread: false,
      online: false,
      serviceType: 'Babysitter'
    },
    {
      id: 3,
      name: 'Marie Dupont',
      lastMessage: 'Je confirme notre rendez-vous pour jeudi après-midi',
      time: 'Hier',
      unread: true,
      unreadCount: 1,
      online: true,
      serviceType: 'Dame d\'accompagnement'
    },
    {
      id: 4,
      name: 'Jean Martin',
      lastMessage: 'Pouvez-vous me donner plus de détails sur les horaires ?',
      time: 'Hier',
      unread: false,
      online: false,
      serviceType: 'Petsitter'
    }
  ];

  selectedConversation: Conversation | null = this.conversations[0];
  
  messages: Message[] = [
    {
      id: 1,
      content: 'Bonjour, je suis disponible pour garder votre chien ce weekend',
      time: '10:30',
      isSender: false,
      status: 'read'
    },
    {
      id: 2,
      content: 'Bonjour ! Super, quels sont vos tarifs ?',
      time: '10:32',
      isSender: true,
      status: 'read'
    },
    {
      id: 3,
      content: 'Mes tarifs sont de 20€ par jour pour la garde de chien',
      time: '10:33',
      isSender: false,
      status: 'read'
    },
    {
      id: 4,
      content: 'Parfait, ça me convient. On se voit samedi alors !',
      time: '10:35',
      isSender: true,
      status: 'delivered'
    }
  ];

  // Propriétés pour les popups
  showInfoPopup: boolean = false;
  showEvaluationPopup: boolean = false;
  currentRating: number = 0;
  evaluationComment: string = '';
  newMessage: string = '';

  // Méthodes pour le popup d'information
  toggleInfoPopup() {
    this.showInfoPopup = !this.showInfoPopup;
  }

  closeInfoPopup() {
    this.showInfoPopup = false;
  }

  reserveService() {
    this.closeInfoPopup();
    console.log('Réservation du service avec:', this.selectedConversation?.name);
    alert(`Réservation avec ${this.selectedConversation?.name}`);
  }

  // Méthodes pour le popup d'évaluation
  evaluateService() {
    this.closeInfoPopup();
    this.showEvaluationPopup = true;
  }

  closeEvaluationPopup() {
    this.showEvaluationPopup = false;
    this.currentRating = 0;
    this.evaluationComment = '';
  }

  setRating(rating: number) {
    this.currentRating = rating;
  }

  getRatingText(): string {
    const ratings = [
      '',
      'Pas terrible',
      'Moyen',
      'Bien',
      'Très bien',
      'Excellent'
    ];
    return ratings[this.currentRating] || '';
  }

  submitEvaluation() {
    if (this.currentRating === 0) return;

    const evaluation = {
      userId: this.selectedConversation?.id,
      userName: this.selectedConversation?.name,
      rating: this.currentRating,
      comment: this.evaluationComment,
      date: new Date()
    };

    console.log('Évaluation soumise:', evaluation);
    alert(`Évaluation de ${evaluation.rating} étoiles envoyée pour ${evaluation.userName}`);
    this.closeEvaluationPopup();
  }

  // Méthodes pour la messagerie
  getServiceIcon(serviceType: string): string {
    switch (serviceType.toLowerCase()) {
      case 'babysitter':
        return '👶';
      case 'petsitter':
        return '🐾';
      case 'dame d\'accompagnement':
        return '❤️';
      default:
        return '💼';
    }
  }

  selectConversation(conversation: Conversation) {
    this.selectedConversation = conversation;
    this.markAsRead(conversation);
  }

  markAsRead(conversation: Conversation) {
    conversation.unread = false;
    conversation.unreadCount = 0;
  }

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    const message: Message = {
      id: this.messages.length + 1,
      content: this.newMessage,
      time: this.getCurrentTime(),
      isSender: true,
      status: 'sent'
    };

    this.messages.push(message);
    this.newMessage = '';

    // Simuler une réponse après un délai
    setTimeout(() => {
      const response: Message = {
        id: this.messages.length + 1,
        content: 'Merci pour votre message, je vous réponds rapidement !',
        time: this.getCurrentTime(),
        isSender: false,
        status: 'read'
      };
      this.messages.push(response);
    }, 2000);
  }

  getCurrentTime(): string {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'sent':
        return '✓';
      case 'delivered':
        return '✓✓';
      case 'read':
        return '✓✓';
      default:
        return '✓';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'sent':
        return '#718096';
      case 'delivered':
        return '#718096';
      case 'read':
        return '#48bb78';
      default:
        return '#718096';
    }
  }
}