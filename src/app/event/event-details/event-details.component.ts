import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISession } from '../shared/index'
import { EventService } from '../shared/event.service';



@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left:20px; padding-right:20px }
        .event-image { height:100px; }
        
    `]
})
export class EventDetailsComponent implements OnInit {
    event: any;
    addMode: boolean;

    constructor(private _eventService: EventService, private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.event = this._eventService.getEventById(+this._activatedRoute.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    cancelCreate() {
        this.addMode = false;
    }

    createNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this._eventService.updateEvent(this.event);
        this.addMode = false;

    }
}