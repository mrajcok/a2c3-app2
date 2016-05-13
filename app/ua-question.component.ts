import {Component, Input, ViewChild, ElementRef} from '@angular/core';
import {Question}  from './question-and-answers';

@Component({
    selector: 'ua-question',
    templateUrl: 'app/ua-question.component.html',
    styles: [`
    article  { margin-bottom: 1em; }
    input    { width: 95%; height: 1.1em; }
    input, p { margin: 0.5em 0; }
    p        { font-weight: bold; height: 1.4em; }
    footer   { font-style: italic; font-size: 95%; margin: 0.5em 0; }`]
})
export class UaQuestionComponent {
    @Input() question: Question;
    @ViewChild('input1') input1: ElementRef;
    editing = false;
    savedContent: string;
    edit() {
        this.editing = true;
        this.savedContent = this.question.content;
        setTimeout(() => {  // TODO run outside Angular zone
            this.input1.nativeElement.focus();
        });
    }
    cancel() {
        this.editing = false;
        this.question.content = this.savedContent;
    }
    save() {
        this.editing = false;
        // TODO emit event to let parent know
    }
}   