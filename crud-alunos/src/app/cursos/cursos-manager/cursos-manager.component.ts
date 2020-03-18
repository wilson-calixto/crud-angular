import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { CursosFormularioComponent } from '../cursos-formulario/cursos-formulario.component';

@Component({
  selector: 'app-cursos-manager',
  templateUrl: './cursos-manager.component.html',
  styleUrls: ['./cursos-manager.component.scss']
})
export class CursosManagerComponent implements OnInit {
  service: CursosService;
  formComponent=CursosFormularioComponent;
  displayedColumns: string[] = ['select', 'name', 'progress', 'color'];

  constructor() { }

  ngOnInit(): void {
  }

}
