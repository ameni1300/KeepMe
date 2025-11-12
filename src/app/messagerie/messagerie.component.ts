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

  newMessage: string = '';

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
    // En production, vous chargeriez les messages depuis une API
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