import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {

  constructor(private readonly appService: AppService) {} //inyeccion de dependencias

  @Get('hello')  //decorador de ruta
  getHello() {
    return this.appService.getHello();
  }

  @Get('goodbye')  //decorador de ruta
  getGoodbye() {
    return this.appService.getGoodbye();
  }

  @Get('time')
  getTime(){
    return this.appService.getTiempo();
  }

}


