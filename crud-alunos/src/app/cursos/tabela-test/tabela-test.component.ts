import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';





@Component({
  selector: 'app-tabela-test',
  templateUrl: './tabela-test.component.html',
  styleUrls: ['./tabela-test.component.scss']
})
export class TabelaTestComponent implements OnInit {
  @Input() displayedColumns: string[] = ['select'];
  @Input() dataSource: MatTableDataSource<any>;

  @Output() elementHasSelected: EventEmitter<any> = new EventEmitter();



  selection = new SelectionModel<any>(true, []);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  constructor() {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isCheckbox(column){
    if(column==='select'){
      return true  
    }
    return false
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }


  selectElement(element=null){
    if (!element) {
      this.isAllSelected()? this.selection.select():this.selection.deselect()
    }

    this.selection.isSelected(element) ? this.selection.deselect(element) : this.selection.select(element)
    this.selecaoMudou()
  }

  selecaoMudou(){
    this.elementHasSelected.emit(this.selection);
  }
  
}

