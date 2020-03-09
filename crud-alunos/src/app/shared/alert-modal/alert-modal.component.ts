import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  @Input() type = 'success';
  @Input() message = String;

  constructor(public bsModalRef: BsModalRef) { }


  ngOnInit(): void {
    // this.bsModalRef.hide();
  }
  onClose() {
    this.bsModalRef.hide();
  }
}
