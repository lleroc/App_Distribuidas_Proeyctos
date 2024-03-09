import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/usuarios')
export class UsuariosController {
  @Get()
  listar() {
    return 'Listando usuarios';
  }
}
