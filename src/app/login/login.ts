import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],        
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  // hardcoded users
  private users = [
    { email: 'rasmus@example.com', password: 'rasmus123' },
    { email: 'chungus@gmail.com', password: '123' },
    { email: 'seal@example.com', password: 'seal' }
  ];

  constructor(private router: Router) {}

  login() {
    this.error = '';

    const foundUser = this.users.find(
      u => u.email === this.email && u.password === this.password
    );

    if (foundUser) {
      // Redirect to profile if match
      this.router.navigate(['/profile']);
    } else {
      // show errer if no match
      this.error = 'Feil e-post eller passord. Prøv igjen.';
    }
  }
}
