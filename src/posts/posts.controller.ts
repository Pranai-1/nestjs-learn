import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly postService:PostsService){

        //getAllPostsByName is part of the instance because it is an arrow function
        console.log(this)  
                    //PostsController {
                    //   postService: PostsService {
                    //     posts: [ [Object], [Object], [Object] ],
                    //     getAllPostsByName: [Function: getAllPostsByName]
                    //   }
                    // }
        console.log(postService)

 
                // PostsService {
                //   posts: [
                //     {
                //       id: 1,
                //       name: 'First Post',
                //       description: 'Here is your first post',
                //       createdAt: 2025-07-02T04:55:12.025Z
                //     },
                //     {
                //       id: 2,
                //       name: 'second Post',
                //       description: 'Here is your firsecondst post',
                //       createdAt: 2025-07-02T04:55:12.025Z
                //     },
                //     {
                //       id: 3,
                //       name: 'Third Post',
                //       description: 'Here is your Third post',
                //       createdAt: 2025-07-02T04:55:12.025Z
                //     }
                //   ],
                //   getAllPostsByName: [Function: getAllPostsByName]
            }

                    @Get()
                    getAllPosts(){
                        return this.postService.getAllPosts()
                    }
     
     
                    @Get("post/:id")
                    getPostById(@Param('id',ParseIntPipe) id:number){
                        return this.postService.getPostById(id)
                    }

                     @Get("query")
                    getPostByName(@Query('name') name:string){
                        return this.postService.getAllPostsByName(name)
                    }
}
