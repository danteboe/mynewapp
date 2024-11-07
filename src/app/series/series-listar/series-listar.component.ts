import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {

  series: Array<Serie> = [];
  average: number = 0;
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      //Calculate average seasons
      let sum = 0;
      series.forEach((serie) => {
        sum += serie.seasons;
      });
      this.average = sum / series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
