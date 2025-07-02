import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostInterface } from 'src/interfaces/post.interface';

@Controller('posts')
export class PostsController {

    constructor(private readonly postService:PostsService){

        //getAllPostsByName is part of the instance because it is an arrow function
        //If we are using decorators for a function then it cannot be arrow function.I has to be a regular function

     //   console.log(this)  
                    //PostsController {
                    //   postService: PostsService {
                    //     posts: [ [Object], [Object], [Object] ],
                    //     getAllPostsByName: [Function: getAllPostsByName]
                    //   }
                    // }
       // console.log(postService)

 
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
                    getAllPosts():PostInterface[]{
                        return this.postService.getAllPosts()
                    }
     
     
                    @Get("post/:id")
                    getPostById(@Param('id',ParseIntPipe) id:number):PostInterface{
                        return this.postService.getPostById(id)
                    }

                     @Get("query")
                    getPostByName(@Query('name') name:string):PostInterface{
                        return this.postService.getAllPostsByName(name)
                    }

                    @Post('')
                    @HttpCode(HttpStatus.CREATED)
                    createPost( @Body() postDate:Omit<PostInterface, 'id' | 'createdAt'>):PostInterface[]{

                        return this.postService.createPost(postDate)
                    }


                    @Put(':id')
                    updatePost( @Body() postData:Partial<Omit<PostInterface, 'id' | 'createdAt'>>,@Param('id',ParseIntPipe) id:number):PostInterface[]{

                        return this.postService.updatePost(id,postData)
                    }


                    @Delete(":id")
                      deletePost(@Param('id',ParseIntPipe) id:number):PostInterface[]{

                        return this.postService.deletePost(id)
                    }
}
