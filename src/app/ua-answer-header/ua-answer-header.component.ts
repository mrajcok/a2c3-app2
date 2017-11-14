import {Component, Input} from '@angular/core';

@Component({
  selector: 'ua-answer-header',
  template: `<div>
    {{answerCount}} Answer{{answerCount !== 1 ? 's':''}}
  </div>`,
  styles: [`div { font-weight: bold; padding-bottom: 0.5em; 
     margin-top: 2em; border-bottom: 1px solid #ddd;}`]
})
export class UaAnswerHeaderComponent {
  @Input() answerCount:number;
}