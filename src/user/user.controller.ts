import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get()
    doWork():string{
        console.log("normal called")
        return this.userService.doWork()
    }

     @Get("name/:userName")
      doWorkByName(@Param('userName') userName:string):string{
        return  this.userService.doWorkByName(userName)
    }

    @Get("query")
      doWorkById(@Query('id',ParseIntPipe) id:number):string{
        console.log("query called")
        return  this.userService.doWorkById(id)
    }

    @Get("greet/:name")
       greet(@Param('name') name:string):string{
        return  this.userService.greet(name)
    }
}
