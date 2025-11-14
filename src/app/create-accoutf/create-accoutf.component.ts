import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-accoutf',
  templateUrl: './create-accoutf.component.html',
  styleUrls: ['./create-accoutf.component.scss']
})
export class CreateAccoutfComponent implements OnInit {
  signupForm: FormGroup;
  currentStep: number = 1;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
progress: number = 33;
profilePhoto: File | null = null;
profilePhotoPreview: string | null = null;
cvFile: File | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.createSignupForm();
  }

  ngOnInit(): void {}

createSignupForm(): FormGroup {
  return this.formBuilder.group({
    // Étape 1
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-\(\)]{10,}$/)]],
    gender: ['', [Validators.required]],
    maritalStatus: ['', [Validators.required]],
    address: ['', [Validators.required]],
    
    // Étape 2
    email: ['', [Validators.required, Validators.email]],
    cin: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    terms: [false, [Validators.requiredTrue]],
    
    // Étape 3
    educationLevel: ['', [Validators.required]],
    language: ['', [Validators.required]],
    languageLevel: ['', [Validators.required]],
    biography: ['', [Validators.required]],
    availability: ['', [Validators.required]]
  }, {
    validators: this.passwordMatchValidator
  });
}


  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }

 nextStep(): void {
  if (this.isCurrentStepValid()) {
    this.currentStep++;
    this.progress = (this.currentStep / 3) * 100;
  }
}

previousStep(): void {
  this.currentStep--;
  this.progress = (this.currentStep / 3) * 100;
}

isCurrentStepValid(): boolean {
  switch (this.currentStep) {
    case 1:
      return this.isStep1Valid();
    case 2:
      return this.isStep2Valid();
    case 3:
      return this.isStep3Valid();
    default:
      return false;
  }
}

isStep2Valid(): boolean {
  const step2Controls = ['email', 'cin', 'password', 'confirmPassword', 'terms'];
  const step2FormValid = step2Controls.every(controlName => this.signupForm.get(controlName)?.valid);
  
  // Vérifier également que les mots de passe correspondent
  const password = this.signupForm.get('password')?.value;
  const confirmPassword = this.signupForm.get('confirmPassword')?.value;
  const passwordsMatch = password === confirmPassword;
  
  return step2FormValid && passwordsMatch;
}

isStep3Valid(): boolean {
  const step3Controls = ['educationLevel', 'language', 'languageLevel', 'biography', 'availability'];
  const step3Valid = step3Controls.every(controlName => this.signupForm.get(controlName)?.valid);
  return step3Valid && this.profilePhoto !== null && this.cvFile !== null;
}

onFileSelected(event: any, type: 'profile' | 'cv'): void {
  const file = event.target.files[0];
  if (file) {
    this.handleFile(file, type);
  }
}

onFileDrop(event: DragEvent, type: 'profile' | 'cv'): void {
  event.preventDefault();
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    this.handleFile(files[0], type);
  }
}

onDragOver(event: DragEvent): void {
  event.preventDefault();
}

handleFile(file: File, type: 'profile' | 'cv'): void {
  if (type === 'profile') {
    if (file.type.startsWith('image/')) {
      this.profilePhoto = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profilePhotoPreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Veuillez sélectionner une image valide');
    }
  } else if (type === 'cv') {
    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      this.cvFile = file;
    } else {
      alert('Veuillez sélectionner un fichier PDF');
    }
  }
}

removeFile(type: 'profile' | 'cv', event: Event): void {
  event.stopPropagation();
  if (type === 'profile') {
    this.profilePhoto = null;
    this.profilePhotoPreview = null;
  } else if (type === 'cv') {
    this.cvFile = null;
  }
}

// Ajouter les getters pour l'étape 3
get educationLevel() { return this.signupForm.get('educationLevel'); }
get language() { return this.signupForm.get('language'); }
get languageLevel() { return this.signupForm.get('languageLevel'); }
get biography() { return this.signupForm.get('biography'); }
get availability() { return this.signupForm.get('availability'); }

  isStep1Valid(): boolean {
    const step1Controls = ['firstName', 'lastName', 'phone', 'gender', 'maritalStatus', 'address'];
    return step1Controls.every(controlName => this.signupForm.get(controlName)?.valid);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Formulaire soumis:', this.signupForm.value);
      
      // Simulation d'enregistrement
      setTimeout(() => {
        alert('Compte créé avec succès !');
        // this.router.navigate(['/login']);
      }, 1000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.signupForm.controls).forEach(key => {
      const control = this.signupForm.get(key);
      control?.markAsTouched();
    });
  }

  // Getters pour les contrôles du formulaire
  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get phone() { return this.signupForm.get('phone'); }
  get gender() { return this.signupForm.get('gender'); }
  get maritalStatus() { return this.signupForm.get('maritalStatus'); }
  get address() { return this.signupForm.get('address'); }
  get email() { return this.signupForm.get('email'); }
  get cin() { return this.signupForm.get('cin'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get terms() { return this.signupForm.get('terms'); }
}

