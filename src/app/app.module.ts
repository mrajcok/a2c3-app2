import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }            from './app.component';
import { UaNavComponent }          from './ua-nav/ua-nav.component';
import { UaAnswerEditComponent }   from './ua-answer-edit/ua-answer-edit.component';
import { UaAnswerHeaderComponent } from './ua-answer-header/ua-answer-header.component';
import { UaAnswerComponent }       from './ua-answer/ua-answer.component';
import { UaQuestionComponent }     from './ua-question/ua-question.component';
import { QandAService }            from './q-and-a.service';
import { RememberService }         from './remember.service';

@NgModule({
  declarations: [
    AppComponent,
    UaNavComponent,
    UaAnswerEditComponent,
    UaAnswerHeaderComponent,
    UaAnswerComponent,
    UaQuestionComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  providers: [ QandAService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
