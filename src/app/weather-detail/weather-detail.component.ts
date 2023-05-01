import { Component, OnInit, Input } from '@angular/core';

import {WEATHER} from '../models/weatherModel';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  @Input() selectedWeather: WEATHER | undefined;

  constructor() { }

  ngOnInit() {
  }

}
