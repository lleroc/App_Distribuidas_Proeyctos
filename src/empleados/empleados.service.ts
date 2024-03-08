import { Injectable } from '@nestjs/common';
import { IEmpleado } from 'src/Interfaces/Empleados.interface';
import { v4 as uuidV4 } from 'uuid';
@Injectable()
export class EmpleadosService {
  empleados: IEmpleado[] = [];

  insertar(empleado: IEmpleado) {
    const emp = {
      id: uuidV4(),
      ...empleado,
    };
    this.empleados.push(emp);
    return emp;
  }
  todos(): IEmpleado[] {
    return this.empleados;
  }
}
