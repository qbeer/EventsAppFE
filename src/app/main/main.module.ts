import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EventsGridComponent } from './events-grid/events-grid.component';
import { AboutComponent } from './about/about.component';
import { ListEventsService } from './services/list-events.service';
import { PostEventService } from './services/post-event.service';
import { EventComponent } from './events-grid/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [ListEventsService, PostEventService],
  declarations: [EventsGridComponent, AboutComponent, EventComponent],
  exports: [EventsGridComponent, AboutComponent]
})
export class MainModule { }
