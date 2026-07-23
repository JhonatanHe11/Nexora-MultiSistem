import { Component } from '@angular/core';

import { ModalFormularioSolicitud } from '../../shared/modal-formulario-solicitud/modal-formulario-solicitud';


@Component({
  selector: 'app-servicios',
  imports: [ModalFormularioSolicitud],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {

  isModalOpen = false;

  solicitarServicio(){
    this.isModalOpen = true;
  }

}
