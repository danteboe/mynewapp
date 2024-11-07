import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import {SerieService} from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor( private serieService: SerieService ) { }
  series: Array<Serie> = [];

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}