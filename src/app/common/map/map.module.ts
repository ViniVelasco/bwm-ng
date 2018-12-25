import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

import { MapService } from './map.service'
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'typeyourkeyhere' //DON'T SEND TO GIT
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ],
  bootstrap: []
})
export class MapModule { }
