import { Injectable } from '@angular/core';
import {WEATHER} from '../models/weatherModel';
import {WEATHERS} from '../mock/WEATHER-MOCK';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  contactsEndpoint = 'http://localhost:3000/api';
  useLocalContacts : boolean = true;//uncomment to use local contacts
  weathers = WEATHERS;
  getContacts(): Observable<WEATHER[]> {
    if (!this.useLocalWeathers) {
    return this.httpClient.get<WEATHER[]>(this.weathersEndpoint); }
    else {
      return of(this.weathers);
    }
  }

  addContact(newWeather: WEATHER): any {

     return this.httpClient.post<any>(this.weathersEndpoint, newWeather);

  }

  constructor(private httpClient: HttpClient) { }
}
