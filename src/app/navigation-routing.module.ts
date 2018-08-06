import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsGridComponent } from './main/events-grid/events-grid.component';
import { AboutComponent } from './main/about/about.component';
import { MainModule } from './main/main.module';
import { AddEventComponent } from './main/add-event/add-event.component';


const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'event', component: AddEventComponent },
  { path: 'calendar', component: EventsGridComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainModule],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
