import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosController } from './empleados/empleados.controller';

@Module({
  imports: [],
  controllers: [AppController, EmpleadosController],
  providers: [AppService],
})
export class AppModule {}
