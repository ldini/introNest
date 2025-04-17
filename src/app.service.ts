import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): {message:string} {
    return {message: "Hello World"};
  }

  getGoodbye(): {message:string} { 
    return {message:"Goodbye World"};
  }

  getTiempo():{time:string}{
    return {time : new Date().toLocaleTimeString()};
  }

}
