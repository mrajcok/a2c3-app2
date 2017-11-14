import { Component, OnInit }        from '@angular/core';
import {Answer, QuestionAndAnswers} from './interfaces';
import {QandAService}               from './q-and-a.service';

@Component({
  selector: 'app-root',
  // providers:  [ ... ], <-- moved to app.module.ts; 
  //                      see HttpClientModule in "imports", and 
  //                      QandAService in "providers" there
  // directives: [ ... ], <-- moved to app.module.ts; see "declarations"
  template: `
    <ua-nav [myTitle]="appTitle"></ua-nav>
    <ng-template [ngIf]="questionAndAnswers">
      <div class="card">
        <ua-question [question]="questionAndAnswers.question"></ua-question>
        <ua-answer-header [answerCount]="answerCount"></ua-answer-header>
        <ua-answer *ngFor="let ans of questionAndAnswers.answers; let i=index"
            [answer]="ans" [index]="i+1" (deleteEvent)="deleteAnswer($event)">
        </ua-answer>
      </div>
    </ng-template>
    <div class="error">{{errorMsg}}</div>`,  // TODO create ErrorBarComponent
  styles: ['.error { margin: 10px; font-size: 14px }']
})
export class AppComponent implements OnInit {
   appTitle = 'Udemy Course - Q&A App';
   errorMsg: string;
   questionAndAnswers: QuestionAndAnswers;
   constructor(private _qaService: QandAService) {
      console.clear();
   }
   ngOnInit() {
      // new way, with the service returning an Observable
      this._qaService.getQuestionAndAnswers()
         .subscribe(
           questionAndAnswers => this.questionAndAnswers = questionAndAnswers,
           err                => this.errorMsg           = err
         );
      // old way, with the service returning a Promise
      // this._qaService.getQuestionAndAnswers()
      //    .then(
      //       questionAndAnswers => this.questionAndAnswers = questionAndAnswers,
      //       err                => this.errorMsg           = <any>err);
   }
   get answerCount(): number {
      if(!this.hasOwnProperty('questionAndAnswers')) return 0;
      return this.questionAndAnswers.answers.length;
   }
   deleteAnswer(answer: Answer) {
      this.questionAndAnswers.answers.splice(
         this.questionAndAnswers.answers.indexOf(answer), 1);
   }
}
