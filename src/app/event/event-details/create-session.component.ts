import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISession } from '../shared/index';

@Component({
    selector:  'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
        em { float:right; color: #E05C65;padding-left:10px }
        .error input { background-color : #E3C3C5 }
        .error ::-webkit-input-placeholder { color : #999 }
        .error ::-moz-placeholder { color : #999 }
        .error :-moz-placeholder{ color : #999 }
        .error :ms-input-placeholder { color : #999 }
    `]
})
export class CreateSessionComponent implements OnInit {
    @Output() createNewSession = new EventEmitter();
    @Output() cancelCreate = new EventEmitter();

    newSessionsForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [
            Validators.required,
            Validators.maxLength(400),
            this.restrictedWords(['foo', 'bar'])
        ]
        );

        this.newSessionsForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });

    }

    private restrictedWords(words) {
        return (control: FormControl): { [key: string]: any } => {
            if (!words) return null;

            var invalidWords = words
                .map(w => control.value.includes(w) ? w : null)
                .filter(w => w !== null);

            return invalidWords && invalidWords.length > 0
                ? { 'restrictedWords': invalidWords.join(', ') }
                : null;

            
        }
    }

    cancel() {
        this.cancelCreate.emit();
       
    }

    saveSessions(formValues) {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        this.createNewSession.emit(session);
    }
}