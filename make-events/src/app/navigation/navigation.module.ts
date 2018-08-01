import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    NavigationRoutingModule
  ],
  declarations: [NavToolbarComponent],
  exports: [NavToolbarComponent]
})
export class NavigationModule { }
