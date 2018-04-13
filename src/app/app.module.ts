import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolverService,
    EventService,
    CreateSessionComponent,
    SessionsListComponent,
    DurationPipe

} from './event/index';


import { NavComponent } from './nav/nav.component';
import { ToastrService } from './shared/toastr.service';
import { CollapsibaleWellComponent } from './shared/collapsible-well.component';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes'

import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
      AppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      EventDetailsComponent,
      CreateEventComponent,
      Error404Component,
      NavComponent,
      CreateSessionComponent,
      SessionsListComponent,
      CollapsibaleWellComponent,
      DurationPipe
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      EventRouteActivator,
      EventService,
      ToastrService,
      EventListResolverService,
      AuthService,
      {
          provide: 'canDeactivateCreateEvent',
          useValue : checkDirtyState
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return confirm('Data is not saved. Do you want to leave?');
    }
    else {
        return true;
    }
}
