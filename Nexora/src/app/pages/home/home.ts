import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
//import { Footer } from '../../layout/footer/footer';
import { ModalFormularioSolicitud } from '../../shared/modal-formulario-solicitud/modal-formulario-solicitud';

//Paginas
import { Servicios } from '../servicios/servicios';
import { Nosotros } from '../nosotros/nosotros';


@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    //Footer,
    ModalFormularioSolicitud,
    Servicios,
    Nosotros
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  isModalOpen = false;

  solicitarServicio(){
    this.isModalOpen = true;
  }

}