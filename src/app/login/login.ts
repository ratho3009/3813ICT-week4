import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'] 
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';


  private AUTH_URL = 'http://localhost:3000/api/auth';


  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.error = '';

    this.http.post<any>(this.AUTH_URL, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        if (res?.valid) {
          const publicUser = {
            email: res.email,
            username: res.username ?? (res.email?.split('@')[0] ?? ''),
            birthdate: res.birthdate ?? '',
            age: res.age ?? undefined,
            valid: true
          };
          localStorage.setItem('currentUser', JSON.stringify(publicUser));
          this.router.navigate(['/profile']);
        } else {
          this.error = 'wrong email or password. try again';
          localStorage.removeItem('currentUser');
        }
      },
      error: () => {
        this.error = 'server error. please try again later.';
      }
    });
  }
}