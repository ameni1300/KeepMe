import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-prestataire',
  templateUrl: './profil-prestataire.component.html',
  styleUrls: ['./profil-prestataire.component.scss']
})
export class ProfilPrestataireComponent {
  isEditing = false;
  price = 0;
  selectedCertification: File | null = null;
  selectedPhoto: File | null = null;
  startDate: string = '';
  endDate: string = '';
  location: string = '';
  description: string = '';

  // Basculer entre l'affichage normal et l'édition
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  // Gérer l'ajout de certification
  onCertificationSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedCertification = file;
      console.log('Certification sélectionnée:', file.name);
    }
  }

  // Gérer l'ajout de photo
  onPhotoSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedPhoto = file;
      console.log('Photo sélectionnée:', file.name);
    }
  }

  // Augmenter le prix
  increasePrice() {
    this.price += 5;
  }

  // Diminuer le prix
  decreasePrice() {
    if (this.price > 0) {
      this.price -= 5;
    }
  }

  // Déclencher le sélecteur de fichiers pour certification
  triggerCertificationInput() {
    const input = document.getElementById('certificationInput') as HTMLInputElement;
    input?.click();
  }

  // Déclencher le sélecteur de fichiers pour photo
  triggerPhotoInput() {
    const input = document.getElementById('photoInput') as HTMLInputElement;
    input?.click();
  }

  // Soumettre le formulaire
  onSubmit() {
    console.log('Formulaire soumis:', {
      price: this.price,
      certification: this.selectedCertification,
      photo: this.selectedPhoto,
      startDate: this.startDate,
      endDate: this.endDate,
      location: this.location,
      description: this.description
    });
    
    // Ici vous pouvez ajouter la logique pour envoyer les données au backend
    this.isEditing = false;
  }

  // Annuler l'édition
  onCancel() {
    this.isEditing = false;
    // Réinitialiser les valeurs si nécessaire
  }
}