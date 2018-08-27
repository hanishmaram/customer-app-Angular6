import { QuestionBase } from './../Models/question-base';
import { QuestionControlService } from './../Services/question-control.service';
import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.css']
})
export class DynamicFormComponentComponent implements OnInit {

  form:FormGroup;
  @Input() questions:QuestionBase<any>[];
  payLoad='';


  constructor(private qcs:QuestionControlService) { }

  ngOnInit() {
    this.form=this.qcs.toFormGroup(this.questions);
  }

  onSubmit(){
    this.payLoad=JSON.stringify(this.form.value);
  }

}
