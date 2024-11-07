import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesListarComponent } from './series-listar/series-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesComponent,
    SeriesListarComponent
  ],exports: [SeriesComponent, SeriesListarComponent]
})
export class SeriesModule { }
