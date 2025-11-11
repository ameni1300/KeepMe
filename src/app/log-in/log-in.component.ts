import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

 loginForm: FormGroup;
  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      
      // Simuler une requête API
      setTimeout(() => {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
        
        console.log('Connexion attempt:', { email, password });
        
        // Réinitialiser le loading
        this.isLoading = false;
        
        // Redirection simulée
        // this.router.navigate(['/dashboard']);
        
        // Message de succès
        alert('Connexion réussie ! Redirection...');
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onForgotPassword(event: Event): void {
    event.preventDefault();
    console.log('Forgot password clicked');
    // Implémentez la logique de réinitialisation de mot de passe
    alert('Fonctionnalité de réinitialisation de mot de passe à implémenter');
  }

  onSignUp(event: Event): void {
    event.preventDefault();
    console.log('Sign up clicked');
    // Implémentez la navigation vers la page d'inscription
    // this.router.navigate(['/signup']);
    alert('Redirection vers la page d\'inscription');
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
