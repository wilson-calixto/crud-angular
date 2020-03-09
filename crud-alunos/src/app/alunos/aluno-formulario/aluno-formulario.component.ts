import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.scss']
})
export class AlunoFormularioComponent implements OnInit {
  
  @Input() aluno = {id:'',nome:'',turma:''};

  form:FormGroup
  result: Subject<any>;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,    
    ) { }

  ngOnInit(): void {
    this.form  = this.fb.group({
      id: [''],
      nome:['',[Validators.required,Validators.minLength(5)]],
      turma:['',[Validators.required,Validators.minLength(5)]]

    });

    this.result=new Subject();
    this.populaForm()
  }
  setAluno(aluno){
    this.aluno=aluno
    this.populaForm()
  }
  
  populaForm(){

    this.form.get('id').setValue(this.aluno.id)
    this.form.get('nome').setValue(this.aluno.nome)
    this.form.get('turma').setValue(this.aluno.turma)
  

  }

  
  formulaEhValido(){
    console.log('this.form',!this.form.valid)
    return this.form.valid
  }

  verificaSeValido(){
    const ehvalido = this.formulaEhValido();
    
    if(ehvalido){
      this.bsModalRef.hide();
    }

    this.result.next({
      'form':this.form,
      'ehvalido': ehvalido
    });


  }
  cancelar(){
    this.bsModalRef.hide();
  }


}