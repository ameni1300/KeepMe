import { Component } from '@angular/core';

interface FormField {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.scss']
})
export class MonProfilComponent {
  user = {
    name: 'Ameni Zakraoui',
    age: 30,
    phone: '+216 92172 893',
    location: 'Ariana',
    email: 'ameni.zakraoui@example.com',
    address: '123 Avenue Habib Bourguiba, Ariana'
  };

  personalInfoFields: FormField[] = [
    {
      label: 'Nom & Prénom',
      type: 'text',
      value: this.user.name,
      placeholder: 'Votre nom complet',
      required: true
    },
    {
      label: 'E-mail',
      type: 'email',
      value: this.user.email,
      placeholder: 'Votre adresse e-mail',
      required: true
    },
    {
      label: 'Numéro de Téléphone',
      type: 'tel',
      value: this.user.phone,
      placeholder: 'Votre numéro de téléphone',
      required: true
    },
    {
      label: 'Adresse complète',
      type: 'text',
      value: this.user.address,
      placeholder: 'Votre adresse complète',
      required: true
    }
  ];

  passwordFields = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  isEditing = false;
  isLoading = false;

  getInitials(name: string): string {
    return name.split(' ').map(part => part.charAt(0)).join('').toUpperCase();
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      // Réinitialiser les valeurs si on annule l'édition
      this.resetForm();
    }
  }

  onFieldChange(field: FormField, newValue: string) {
    field.value = newValue;
    
    // Mettre à jour les données utilisateur
    switch (field.label) {
      case 'Nom & Prénom':
        this.user.name = newValue;
        break;
      case 'E-mail':
        this.user.email = newValue;
        break;
      case 'Numéro de Téléphone':
        this.user.phone = newValue;
        break;
      case 'Adresse complète':
        this.user.address = newValue;
        break;
    }
  }

  resetForm() {
    this.personalInfoFields = [
      {
        label: 'Nom & Prénom',
        type: 'text',
        value: this.user.name,
        placeholder: 'Votre nom complet',
        required: true
      },
      {
        label: 'E-mail',
        type: 'email',
        value: this.user.email,
        placeholder: 'Votre adresse e-mail',
        required: true
      },
      {
        label: 'Numéro de Téléphone',
        type: 'tel',
        value: this.user.phone,
        placeholder: 'Votre numéro de téléphone',
        required: true
      },
      {
        label: 'Adresse complète',
        type: 'text',
        value: this.user.address,
        placeholder: 'Votre adresse complète',
        required: true
      }
    ];

    this.passwordFields = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  saveProfile() {
    this.isLoading = true;
    
    // Simuler une sauvegarde asynchrone
    setTimeout(() => {
      console.log('Profil sauvegardé:', {
        user: this.user,
        passwordChanged: this.passwordFields.newPassword !== ''
      });
      
      this.isLoading = false;
      this.isEditing = false;
      
      // Réinitialiser les champs de mot de passe
      this.passwordFields = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
      
      // Afficher un message de succès
      alert('Profil mis à jour avec succès !');
    }, 1500);
  }

  validatePassword(): boolean {
    if (this.passwordFields.newPassword !== this.passwordFields.confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return false;
    }
    
    if (this.passwordFields.newPassword && this.passwordFields.newPassword.length < 6) {
      alert('Le mot de passe doit contenir au moins 6 caractères !');
      return false;
    }
    
    return true;
  }

  onSubmit() {
    if (this.passwordFields.newPassword && !this.validatePassword()) {
      return;
    }
    
    this.saveProfile();
  }

  canSave(): boolean {
    // Vérifier que tous les champs requis sont remplis
    const requiredFieldsFilled = this.personalInfoFields.every(field => 
      !field.required || field.value.trim() !== ''
    );
    
    // Vérifier la cohérence des mots de passe si modification
    const passwordValid = !this.passwordFields.newPassword || 
      (this.passwordFields.newPassword === this.passwordFields.confirmPassword && 
       this.passwordFields.newPassword.length >= 6);
    
    return requiredFieldsFilled && passwordValid;
  }
}