import {Component, OnInit}          from '@angular/core';
import {Answer, QuestionAndAnswers} from './question-and-answers';
import {QandAService}               from './q-and-a.service';

@Component({
  selector: 'my-app',
  template: `
    <ua-nav [myTitle]="appTitle"></ua-nav>
    <template [ngIf]="questionAndAnswers">
      <div class="card">
        <ua-question [question]="questionAndAnswers.question"></ua-question>
        <ua-answer-header [answerCount]="answerCount"></ua-answer-header>
        <ua-answer *ngFor="let ans of questionAndAnswers.answers; let i=index"
            [answer]="ans" [index]="i+1" (deleteEvent)="deleteAnswer($event)">
        </ua-answer>
      </div>
    </template>
    {{errorMsg}}`  // TODO create ErrorBarComponent
})
export class AppComponent implements OnInit {
   appTitle = 'Udemy Course - Q&A App';
   errorMsg: string;
   questionAndAnswers: QuestionAndAnswers;
   constructor(private _qaService: QandAService) {
      console.clear();
   }
   ngOnInit() {
      this._qaService.getQuestionAndAnswers()
          .then(
            questionAndAnswers => this.questionAndAnswers = questionAndAnswers,
            err => this.errorMsg = <any>err);
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
