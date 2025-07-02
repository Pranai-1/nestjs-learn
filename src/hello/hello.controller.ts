import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
     properties: any[]=[];
    constructor(private readonly helloService:HelloService){
        this.properties=["hello","hi","how are you"]
    }

    @Get()
   sayHello():string{
    console.log(this,this.properties)
      return this.helloService.sayHello()
   }

    @Get("user/:name")
    sayHelloToName(@Param('name') name:string):string{
        return this.helloService.sayHelloToName(name)
    }

    @Get('query')
   sayHelloToId(@Query ('id',ParseIntPipe) id:number):string{
      return this.helloService.sayHelloToId(id)
   }
}
