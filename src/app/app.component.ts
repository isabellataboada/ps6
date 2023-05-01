import { Component } from '@angular/core';
import {WEATHERS} from './mock/WEATHERS-MOCK'
import {WEATHER} from './models/weatherModel';
//import { ContactServiceAsyncService} from './services/contact-service-async.service';
import {ContactService} from "./services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ps6';
  selectedWEATHER: CONTACT | undefined;
  weathers : CONTACT[] | undefined;

  getweather(): void {
    this.weatherService.getWeather()
      .subscribe(weathers => {
        this.weather = weathers;
        console.log(`Weather: ${this.weather}`)
      });
  }


  displayWEATHERDetail(weather: WEATHER) {
    this.selectedWeather = weather;
  }

  constructor(private weatherService: WeatherService) {

  }
  ngOnInit() {
    this.getWeather();
  }
}
