import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListEventsService } from '../services/list-events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.css']
})
export class EventsGridComponent implements OnInit, OnDestroy {

  public events: Event[] = [];
  private eventsSub: Subscription;

  constructor(private service: ListEventsService) { }

  ngOnInit() {
    this.eventsSub = this.service.getEvents().subscribe((res) => {
      if (res as Event[]) {
        this.events = res as Event[];
      } else {
        console.log('ERROR');
      }
    });
  }

  ngOnDestroy() {
    this.eventsSub.unsubscribe();
  }

}
