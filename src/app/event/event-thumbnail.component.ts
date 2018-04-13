import { Component, Input } from '@angular/core'
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
       .thumbnail {min-height : 210px}
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

}