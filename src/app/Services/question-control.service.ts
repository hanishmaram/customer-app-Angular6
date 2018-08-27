import { QuestionBase } from './../Models/question-base';
import {Injectable} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Injectable()
export class QuestionControlService{
  constructor(){}

  toFormGroup(questions:QuestionBase<any>[]):FormGroup{
    let group:any={};

    questions.forEach(question=>{
      group[question.key]=question.required? new FormControl(question.value||'',Validators.required)
                          :new FormControl(question.value||'');
    });

    return new FormGroup(group);
  }

}