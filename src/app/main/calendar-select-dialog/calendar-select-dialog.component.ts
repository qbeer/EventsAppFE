import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListCalendarsService } from '../services/list-calendars.service';

@Component({
  selector: 'app-calendar-select-dialog',
  templateUrl: './calendar-select-dialog.component.html',
  styleUrls: ['./calendar-select-dialog.component.css']
})
export class CalendarSelectDialogComponent implements OnInit {

  public ids: string[];
  @Output() idEmitter = new EventEmitter<string>();

  constructor(private service: ListCalendarsService) { }

  onSelect(id: string): void {
    this.idEmitter.emit(id);
    console.log('id emitted: ' + id);
  }

  ngOnInit() {
    this.service.getCalendars().subscribe((ids) => {
      if (ids as string[]) {
        this.ids = ids as string[];
      } else {
        this.ids = [];
      }
    });
  }

}
