import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }            from './app.component';
import { UaNavComponent }          from './ua-nav.component';
import { UaQuestionComponent }     from './ua-question.component';
import { UaAnswerHeaderComponent } from './ua-answer-header.component';
import { UaAnswerComponent }       from './ua-answer.component';
import { UaAnswerEditComponent }   from './ua-answer-edit.component';
import { QandAService }            from './q-and-a.service';
import { RememberService }         from './remember.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, UaNavComponent, UaQuestionComponent, 
    UaAnswerHeaderComponent, UaAnswerComponent, UaAnswerEditComponent ],
  providers: [ QandAService, RememberService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
