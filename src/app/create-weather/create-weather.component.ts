import { Component, OnInit } from '@angular/core';
import {WEATHER} from '../models/weatherModel';
//import { CONTACTS} from '../CONTACTS-MOCK';
import { WeatherServiceAsyncService} from '../services/weather-service-async.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateWeatherComponent implements OnInit {

 // contacts: CONTACT[] = CONTACTS;
  my: any = {
    city: '',
    state: '',
    temperature: ''
}

  addContact( ): void {
    const newWeather: Weather = {
      name:       this.my.city,
      department: this.my.state,
      UID:        this.my.temperature,
      _id:        'bogus'
    };
//    this.contacts.push(newContact);
    this.weatherService.addWeather(newWeather)
      .subscribe();
  }

  constructor(private weatherService: WeatherServiceAsyncService) { }

  ngOnInit() {
  }

}
