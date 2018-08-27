import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../Models/question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question-component.component.html',
  styleUrls: ['./dynamic-form-question-component.component.css']
})
export class DynamicFormQuestionComponentComponent implements OnInit {

  @Input() question:QuestionBase<any>;
  @Input() form:FormGroup;

  get isValid(){return this.form.controls[this.question.key].valid;}

  constructor() { }

  ngOnInit() {
  }

}
