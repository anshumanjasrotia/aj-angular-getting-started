import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolverService,
    CreateSessionComponent
} from './event/index';


import { Error404Component } from './errors/404.component';


export const appRoutes: Routes = [
    { path: 'create-event', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'events/sessions/new', component: CreateSessionComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: '404', component: Error404Component }
];