import {Component, OnInit}          from '@angular/core';
import {HTTP_PROVIDERS}             from '@angular/http';
import {UaNavComponent}             from './ua-nav.component';
import {UaQuestionComponent}        from './ua-question.component';
import {UaAnswerHeaderComponent}    from './ua-answer-header.component';
import {UaAnswerComponent}          from './ua-answer.component';
import {QandAService}               from './q-and-a.service';
import {Answer, QuestionAndAnswers} from './question-and-answers';

@Component({
  selector:   'my-app',
  providers:  [HTTP_PROVIDERS, QandAService],
  directives: [UaNavComponent, UaQuestionComponent, UaAnswerHeaderComponent, UaAnswerComponent],
  template: `
    <ua-nav [myTitle]="appTitle"></ua-nav>
    <template [ngIf]="questionAndAnswers">
      <div class="card">
        <ua-question [question]="questionAndAnswers.question"></ua-question>
        <ua-answer-header [answerCount]="answerCount"></ua-answer-header>
        <ua-answer *ngFor="let ans of questionAndAnswers.answers; #i=index"
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
