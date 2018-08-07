import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ListEventsService } from '../services/list-events.service';
import { PageEvent, MatDialog } from '@angular/material';
import { CalendarSelectDialogComponent } from '../calendar-select-dialog/calendar-select-dialog.component';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.css']
})
export class EventsGridComponent implements OnInit {

  public pageEvents: PageEvent;
  public events: Event[] = [];
  @Input() calendarId: string;

  constructor(private service: ListEventsService,
  public dialog: MatDialog) { }

  ngOnInit() {
    this.openDialog();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(CalendarSelectDialogComponent, {
      maxWidth: '610px',
      minWidth: '300px',
      width: '65%',
      disableClose: true
    });

    dialogRef.componentInstance.idEmitter.subscribe(result => {
      console.log('The dialog was closed, result is: ' + result);
      this.calendarId = result;
      this.service.getEvents(this.calendarId).subscribe((res) => {
        if (res as Event[]) {
          this.events = res as Event[];
          dialogRef.close();
        } else {
          console.log('ERROR');
        }
      });
    });
  }

}
