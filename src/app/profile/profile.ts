import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface PublicUser {
  email: string;
  username: string;
  valid: boolean;
  birthdate?: string;
  age?: number;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {
  user: PublicUser | null = null;
  saved = false;   // for liten “Saved!”-feedback

  constructor(private router: Router) {}

  ngOnInit(): void {
    const stored = localStorage.getItem('currentUser');
    if (!stored) {
      // Ikke innlogget → til login
      this.router.navigate(['/login']);
      return;
    }
    this.user = JSON.parse(stored);
  }

  save(): void {
    if (!this.user) return;
    // NB: lagrer fortsatt bare “public” felter (ingen passord)
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.saved = true;
    setTimeout(() => (this.saved = false), 1500);
  }
}
