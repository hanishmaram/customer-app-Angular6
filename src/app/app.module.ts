import { browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { MaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { DynamicFormComponentComponent } from './dynamic-form-component/dynamic-form-component.component';
import { DynamicFormQuestionComponentComponent } from './dynamic-form-question-component/dynamic-form-question-component.component';
import {QuestionControlService} from './Services/question-control.service';
import {QuestionService} from './Services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DynamicFormComponentComponent,
    DynamicFormQuestionComponentComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuestionControlService,QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
