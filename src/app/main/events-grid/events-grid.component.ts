import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListEventsService } from '../services/list-events.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.css']
})
export class EventsGridComponent implements OnInit {

  public pageEvents: PageEvent;
  public events: Event[] = [];

  constructor(private service: ListEventsService) { }

  ngOnInit() {
    this.service.getEvents().subscribe((res) => {
      if (res as Event[]) {
        this.events = res as Event[];
      } else {
        console.log('ERROR');
      }
    });
  }

}
