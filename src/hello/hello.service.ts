import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

    sayHello():string{
        
         return "hello from Hello service"
    }

      sayHelloToName(name:string):string{
         console.log("sayHelloToName called",this)
         return `hello from Hello service to ${name}`    
    }

    sayHelloToId(id:number):string{
        console.log("sayHelloToId called",this)
         return `hello from Hello service to ${id}`    
    }
}
