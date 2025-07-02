import { Injectable } from '@nestjs/common';
import { Post as PostInterface } from 'src/interfaces/post.interface';

@Injectable()
export class PostsService {

    posts:PostInterface[]=[]

    constructor(){
        this.posts=[{
                        id:1,
                        name:"First Post",
                        description:"Here is your first post",
                        createdAt:new Date()
                    },
                    {
                        id:2,
                        name:"second Post",
                        description:"Here is your firsecondst post",
                        createdAt:new Date()
                    },
                    {
                        id:3,
                        name:"Third Post",
                        description:"Here is your Third post",
                        createdAt:new Date()
                    }]
               }


               getAllPosts():PostInterface[]{
                   return this.posts
               }


               
               getPostById(id:number):PostInterface | {}{
                   return this.posts.find((post)=>post.id==id) || {}
               }

                getAllPostsByName=(name:string):PostsService | {}=>{  
                    console.log(this)
                        return this.posts.find((post)=>post.name==name) || {}
               }
}
