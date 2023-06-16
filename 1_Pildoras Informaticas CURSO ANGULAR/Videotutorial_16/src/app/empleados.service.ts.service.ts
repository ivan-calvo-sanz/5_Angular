import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosServiceTsService {
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {}

  /* Creamos un Array con la info simulando que es el Servicio el que 
  recupera de una BBDD esta información */
  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Ana', 'Martín', 'Directora', 5500),
    new Empleado('Maria', 'Fernandez', 'Jefa sección', 3500),
    new Empleado('Laura', 'López', 'Administrativo', 2500),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va a agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario: ' +
        empleado.salario
    );
    this.empleados.push(empleado);
  }
}
