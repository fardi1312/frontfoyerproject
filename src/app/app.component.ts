import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontfoyerproject';

  blocs: any[] = [];
  chambres: any[] = [];
  etudiants: any[] = [];
  foyers: any[] = [];
  reservations: any[] = [];
  universites: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchBlocs();
    setTimeout(() => {
      this.fetchChambres();
    }, 1000);
    this.fetchChambres();
    setTimeout(() => {
      this.fetchChambres();
    }, 1000);
    this.fetchEtudiants();
    setTimeout(() => {
      this.fetchChambres();
    }, 1000);
    this.fetchFoyers();
    setTimeout(() => {
      this.fetchChambres();
    }, 1000);
    this.fetchReservations();
    setTimeout(() => {
      this.fetchChambres();
    }, 1000);
    this.fetchUniversites();
  }

  fetchBlocs(): void {
    this.userService.getAllBlocs().subscribe(
      data => {
        console.log('Blocs:', data); // Optional: Log the data for debugging
        this.blocs = data;
      },
      error => {
        console.error('Error fetching blocs:', error);
        // Optional: Show user-friendly message or handle in UI
      }
    );
  }

  fetchChambres(): void {
    this.userService.getAllChambres().subscribe(
      data => {
        console.log('Chambres:', data); // Optional: Log the data for debugging
        this.chambres = data;
      },
      error => {
        console.error('Error fetching chambres:', error);
        // Optional: Show user-friendly message or handle in UI
      }
    );
  }

  fetchEtudiants(): void {
    this.userService.getAllEtudiants().subscribe(
      data => {
        console.log('Etudiants:', data); // Optional: Log the data for debugging
        this.etudiants = data;
      },
      error => {
        console.error('Error fetching etudiants:', error);
        // Optional: Show user-friendly message or handle in UI
      }
    );
  }

  fetchFoyers(): void {
    this.userService.getAllFoyers().subscribe(
      data => {
        console.log('Foyers:', data); // Optional: Log the data for debugging
        this.foyers = data;
      },
      error => {
        console.error('Error fetching foyers:', error);
        // Optional: Show user-friendly message or handle in UI
      }
    );
  }

  fetchReservations(): void {
    this.userService.getAllReservations().subscribe(
      data => {
        console.log('Reservations:', data); // Optional: Log the data for debugging
        this.reservations = data;
      },
      error => {
        console.error('Error fetching reservations:', error);
        // Optional: Show user-friendly message or handle in UI
      }
    );
  }

  fetchUniversites(): void {
    this.userService.getAllUniversites().subscribe(
      data => {
        console.log('Universites:', data); // Optional: Log the data for debugging
        this.universites = data;
      },
      error => {
        console.error('Error fetching universites:', error);
        // Optional: Show user-friendly message or handle in UI
      }
    );
  }
}
