import {Component, Input, Output, EventEmitter} from '@angular/core';
import {UaAnswerEditComponent} from './ua-answer-edit.component';
import {Answer}                from './question-and-answers';

@Component({
   selector: 'ua-answer',
   directives: [UaAnswerEditComponent],
   template: `
    <article>
        <header>
            <span [class.accepted-answer]="answer.accepted">#{{index}}</span>
            <div *ngIf="answer.accepted">&#10004;</div>
        </header>
        <p *ngIf="edit">
            <ua-answer-edit [answer]="answer" (doneEvent)="edit=false"></ua-answer-edit>
        </p>
        <p *ngIf="!edit">
            {{answer.content}}
        </p>
        <button (click)="edit=true" [disabled]="edit" md-button>edit</button>
        <button (click)="requestDelete()" md-button class="md-icon-button" title="delete answer">
           <i md-icon class="material-icons">delete</i>
        </button>
        <footer>{{answer.author}}</footer>
    </article>`,
   styles: [`
    article   { margin: 0.5em 0 0.5em 2.5em; border-bottom: 1px solid #ddd; }
    header    { margin-left: -2.5em; float: left; }
    header div{ color: green; font-size: x-large; }
    p, footer { margin: 0.5em 0; }
    footer    { font-style: italic; font-size: 95%; }
    .accepted-answer { font-weight: bold}`]
})
export class UaAnswerComponent {
   @Input()  answer: Answer;
   @Input()  index: number;
   @Output() deleteEvent = new EventEmitter<Answer>();
   edit = false;
   requestDelete() {
      this.deleteEvent.emit(this.answer);
   }
}