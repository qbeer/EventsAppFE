import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EventsGridComponent } from './events-grid/events-grid.component';
import { AboutComponent } from './about/about.component';
import { ListEventsService } from './services/list-events.service';
import { PostEventService } from './services/post-event.service';
import { EventComponent } from './events-grid/event/event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarSelectDialogComponent } from './calendar-select-dialog/calendar-select-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [ListEventsService, PostEventService],
  declarations: [EventsGridComponent, AboutComponent, EventComponent, AddEventComponent, CalendarSelectDialogComponent],
  entryComponents: [CalendarSelectDialogComponent],
  exports: [EventsGridComponent, AboutComponent, AddEventComponent, CalendarSelectDialogComponent]
})
export class MainModule { }
