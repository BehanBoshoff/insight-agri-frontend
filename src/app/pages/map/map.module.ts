import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
  ],
})
export class MapModule {}
