import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../Environments/environment';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.error(`Error occurred: ${error.message}`);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  // Bloc - Fetch all Blocs
  getAllBlocs(): Observable<any> {
    return this.http.get(`${BASE_URL}/bloc/findAll`)
      .pipe(catchError(this.handleError));
  }

  // Chambre - Fetch all Chambres
  getAllChambres(): Observable<any> {
    return this.http.get(`${BASE_URL}/chambre/findAll`)
      .pipe(catchError(this.handleError));
  }

  // Etudiant - Fetch all Etudiants
  getAllEtudiants(): Observable<any> {
    return this.http.get(`${BASE_URL}/etudiant/findAll`)
      .pipe(catchError(this.handleError));
  }

  // Foyer - Fetch all Foyers
  getAllFoyers(): Observable<any> {
    return this.http.get(`${BASE_URL}/foyer/findAll`)
      .pipe(catchError(this.handleError));
  }

  // Reservation - Fetch all Reservations
  getAllReservations(): Observable<any> {
    return this.http.get(`${BASE_URL}/reservation/findAll`)
      .pipe(catchError(this.handleError));
  }

  // Universite - Fetch all Universites
  getAllUniversites(): Observable<any> {
    return this.http.get(`${BASE_URL}/universite/findAll`)
      .pipe(catchError(this.handleError));
  }
}
