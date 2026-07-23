import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhatsappService} from '../../services/whatsapp';


@Component({
  selector: 'app-modal-formulario-solicitud',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-formulario-solicitud.html',
  styleUrl: './modal-formulario-solicitud.scss',
})
export class ModalFormularioSolicitud {

  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  formulario = {
    nombre: '',
    telefono: '',
    descripcion: ''
  };

  constructor(
    private whatsappService: WhatsappService
  ) {}

  close() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

  enviarWhatsApp() {
    this.whatsappService
      .enviarSolicitud(this.formulario)
      .subscribe({

        next: (respuesta) => {

          console.log(
            'Solicitud enviada',
            respuesta
          );

          this.close();

        },


        error: (error) => {

          console.error(
            'Error enviando solicitud',
            error
          );

        }

      });


  }
  
}
