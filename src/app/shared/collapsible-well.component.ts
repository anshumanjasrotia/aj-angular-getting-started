import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggle()" class="well pointable">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `
})
export class CollapsibaleWellComponent {
    @Input() title: string;
    visible: boolean = true;

    toggle() {
        this.visible = !this.visible;
    }

}