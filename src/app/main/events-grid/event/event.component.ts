import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

  formatDate(date: string) {
    return moment(date, moment.ISO_8601).format('MMMM Do YYYY, h:mm:ss a');
  }


}
