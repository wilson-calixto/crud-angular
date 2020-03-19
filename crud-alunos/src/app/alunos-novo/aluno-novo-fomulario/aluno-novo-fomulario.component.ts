import { Component, OnInit, Input } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-aluno-novo-fomulario',
  templateUrl: './aluno-novo-fomulario.component.html',
  styleUrls: ['./aluno-novo-fomulario.component.scss']
})
export class AlunoNovoFomularioComponent extends BaseFormComponent implements OnInit {
  @Input() element = {_id:'',nome:'testststs',turma:'testststs'};

  constructor(
    public bsModalRef: BsModalRef,
    protected fb: FormBuilder,    
    ) { 
      super(bsModalRef,fb)
    }

  ngOnInit(): void {
    this.form  = this.fb.group({
      _id: [''],
      nome:['',[Validators.required,Validators.minLength(2)]],
      turma:['',[Validators.required,Validators.minLength(5)]]

    });

    this.result=new Subject();
    this.populaForm()
  }

  
  populaForm(){
    this.form.get('_id').setValue(this.element._id)
    this.form.get('nome').setValue(this.element.nome)
    this.form.get('turma').setValue(this.element.turma)
  }

}