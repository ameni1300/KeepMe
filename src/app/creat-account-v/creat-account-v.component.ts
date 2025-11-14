import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-account-v',
  templateUrl: './creat-account-v.component.html',
  styleUrls: ['./creat-account-v.component.scss']
})
export class CreatAccountVComponent  implements OnInit {
  signupForm: FormGroup;
  currentStep: number = 1;
  progress: number = 50;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

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
      terms: [false, [Validators.requiredTrue]]
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
    if (this.isStep1Valid()) {
      this.currentStep = 2;
      this.progress = 100;
    }
  }

  previousStep(): void {
    this.currentStep = 1;
    this.progress = 50;
  }

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
