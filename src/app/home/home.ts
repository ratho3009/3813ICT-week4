import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,         // <-- Legg til denne
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {  // <-- Endre navn
}
