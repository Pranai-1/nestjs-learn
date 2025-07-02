import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
 
    constructor(private readonly helloService:HelloService){}

    doWork():string{
        return "Doing some work"
    }

      doWorkByName(name:string):string{
        return `Doing some work ${name}`
    }

      doWorkById(id:number):string{
        return `Doing some work ${id}`
    }

    greet(name:string):string{
        return this.helloService.sayHelloToName(name)
    }
}
