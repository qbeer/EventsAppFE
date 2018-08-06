import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostEventService } from '../services/post-event.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../services/event.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public event: Event;
  public eventForm: FormGroup;

  private setUpEventForm(): void {
    this.eventForm = new FormGroup({
      host: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      date: new FormControl((new Date()).toISOString(), Validators.required),
      location: new FormControl('', Validators.required)
    });
  }

  private extractFormData(): void {
    this.event = new Event();
    console.log(this.eventForm.value);
    this.event.host = this.eventForm.value.host;
    this.event.title = this.eventForm.value.title;
    this.event.description = this.eventForm.value.desc;
    this.event.date = this.eventForm.value.date;
    this.event.location = this.eventForm.value.location;
  }

  public onSubmit(): void {
    console.log('Called');
    this.extractFormData();
    this.service.postEvent(this.event).subscribe((res) => {
      console.log('Result of HTTP post request: ' + res);
    });
  }

  constructor(private service: PostEventService) { }

  ngOnInit() {
    this.setUpEventForm();
  }

}
