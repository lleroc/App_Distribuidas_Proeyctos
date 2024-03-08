import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { IEmpleado } from 'src/Interfaces/Empleados.interface';

@Controller('api/v1/empleados')
export class EmpleadosController {
  constructor() {}

  @Post()
  insertar(@Req() peticion: Request) {
    return `el metodo usado es ${peticion.method}`;
  }

  @Get()
  todos(@Req() peticion: Request) {
    return `el metodo usado es ${peticion.method}`;
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
