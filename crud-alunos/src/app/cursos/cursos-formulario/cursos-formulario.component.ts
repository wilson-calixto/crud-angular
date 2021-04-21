import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
@Component({
  selector: 'app-cursos-formulario',
  templateUrl: './cursos-formulario.component.html',
  styleUrls: ['./cursos-formulario.component.scss']
})
export class CursosFormularioComponent extends BaseFormComponent implements OnInit {
  @Input() element = {_id:'',nome:'testststs'};

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

    });

    this.result=new Subject();
    this.populaForm()
  }

  
  populaForm(){
    this.form.get('_id').setValue(this.element._id)
    this.form.get('nome').setValue(this.element.nome)
  }

}