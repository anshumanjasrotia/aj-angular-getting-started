import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';



@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private _eventService: EventService, private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this._eventService.getEventById(+route.params['id']);
        if (!eventExists) {
            this._router.navigate(['/404']);
        }
        return true;
    }
}