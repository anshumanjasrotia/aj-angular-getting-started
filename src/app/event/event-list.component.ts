import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';


@Component({

    templateUrl: './event-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private _eventService: EventService, private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this._activatedRoute.snapshot.data['events'];
    }


   
}