import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { IEmpleado } from 'src/Interfaces/Empleados.interface';
import { EmpleadosService } from './empleados.service';

@Controller('api/v1/empleados')
export class EmpleadosController {
  constructor(private empleadoServicio: EmpleadosService) {}

  @Post()
  insertar(@Body() empleado: IEmpleado) {
    return this.empleadoServicio.insertar(empleado);
  }

  @Get()
  todos() {
    return this.empleadoServicio.todos();
  }

  @Get(':id')
  uno(@Req() peticion: Request) {
    return `el metodo usado es ${peticion.method}`;
  }

  @Put(':id')
  actualizar(@Req() peticion: Request) {
    return `el metodo usado es ${peticion.method}`;
  }

  @Delete(':id')
  eliminar(@Req() peticion: Request) {
    return `el metodo usado es ${peticion.method}`;
  }
}
