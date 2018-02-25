import {Component, AfterViewInit, Input, Output} from '@angular/core';
import {EventEmitter, ViewChild, ElementRef}     from '@angular/core';
import {Answer}          from '../interfaces';
import {RememberService} from '../remember.service';

@Component({
   selector: 'ua-answer-edit',
   template: `<input #input1 [(ngModel)]="answer.content">
        <br><button (click)="save()" md-raised-button class="md-raised md-primary">Save</button>
            <button (click)="cancel()" md-button md-raised-button class="md-raised">Cancel</button>`,
   styles: [`input { width: 95%; }`],
   providers: [RememberService]
})
export class UaAnswerEditComponent implements AfterViewInit {
   @Input() answer: Answer;
   @Output() doneEvent = new EventEmitter<string>();
   @ViewChild('input1') input1: ElementRef;
   originalContent: string;
   constructor(private _rememberService: RememberService<string>) { }
   ngAfterViewInit() {
      this._rememberService.save(this.answer.content);
      this.input1.nativeElement.focus();
   }
   save() {
      this.doneEvent.emit('save');
   }
   cancel() {
      this.answer.content = this._rememberService.recall();
      this.doneEvent.emit('cancel');
   }
}
