import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';

import { EventsComponent } from './events.component';
import { BlogRoutingModule } from '../blog/blog-routing.module';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  providers: [{provide: Window, useValue: window}]
})
export class EventsModule { }
