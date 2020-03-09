import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {  
    @Input() title = String;
    @Input() message = 'success';
    @Input() okTxt = 'Sim';
    @Input() cancelTxt = 'Não';
    confirmResult: Subject<boolean>;
  
    constructor(public bsModalRef: BsModalRef) { }
  
    ngOnInit(): void {
      this.confirmResult=new Subject();
    }
  
    onConfirm(){
      this.confirmAndClose(true);
    }
    onClose(){
      this.confirmAndClose(false);
    }
    private confirmAndClose(value: boolean) {
      this.confirmResult.next(value);
      this.bsModalRef.hide();
    }
  }
  