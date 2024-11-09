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
    this.fetchChambres();
    this.fetchEtudiants();
    this.fetchFoyers();
    this.fetchReservations();
    this.fetchUniversites();
  }

  fetchBlocs() {
    this.userService.getAllBlocs().subscribe(
      data => this.blocs = data,
      error => console.error('Error fetching blocs:', error)
    );
  }

  fetchChambres() {
    this.userService.getAllChambres().subscribe(
      data => this.chambres = data,
      error => console.error('Error fetching chambres:', error)
    );
  }

  fetchEtudiants() {
    this.userService.getAllEtudiants().subscribe(
      data => this.etudiants = data,
      error => console.error('Error fetching etudiants:', error)
    );
  }

  fetchFoyers() {
    this.userService.getAllFoyers().subscribe(
      data => this.foyers = data,
      error => console.error('Error fetching foyers:', error)
    );
  }

  fetchReservations() {
    this.userService.getAllReservations().subscribe(
      data => this.reservations = data,
      error => console.error('Error fetching reservations:', error)
    );
  }

  fetchUniversites() {
    this.userService.getAllUniversites().subscribe(
      data => this.universites = data,
      error => console.error('Error fetching universites:', error)
    );
  }
}
