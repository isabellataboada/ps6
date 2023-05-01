import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WEATHER} from '../models/weatherModel';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceAsyncService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  contactsEndpoint = 'http://localhost:3000/api/db';

  getContacts(): Observable<WEATHER[]> {
    return this.httpClient.get<WEATHER[]>(this.weathersEndpoint);
  }

  addContact(newWeather: WEATHER): Observable<any> {
    // We don't need the '_id' property on the back end (probly should fix it there)
    delete newWeather._id;
    return this.httpClient.post(this.weathersEndpoint, newWeather, this.httpOptions);

  }

  constructor(private httpClient: HttpClient) { }
}
