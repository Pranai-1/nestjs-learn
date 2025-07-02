import { Injectable, NotFoundException } from '@nestjs/common';
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


               
               getPostById(id:number):PostInterface {
                console.log(this)
                       const singlePost=this.posts.find((post)=>post.id==id)
                       if(!singlePost)
                        throw new NotFoundException(`post with ${id} not found`);
                    return singlePost
            
               }

                getAllPostsByName=(name:string):PostInterface=>{  
                    console.log(this)
                       const singlePost=this.posts.find((post)=>post.name==name)
                       if(!singlePost)
                        throw new NotFoundException(`post with ${name} not found`);
                    return singlePost
               }

               createPost(postData:Omit<PostInterface,'id' | 'createdAt'>){
                    const maxId=this.posts.reduce((id,post)=>id>post.id ? id :post.id,-1)
                    const newPost={
                        id:maxId+1,
                        ...postData,
                        createdAt:new Date()
                    }
                    this.posts.push(newPost)
                    return this.posts
               }

                updatePost(id:number,postData:Partial<Omit<PostInterface,'id' | 'createdAt'>>){
                   const index = this.posts.findIndex(post => post.id === id);
                    if (index === -1) throw new NotFoundException(`post with ${id} not found`);
                       const [deletedPost] = this.posts.splice(index, 1);
                    const updatedPost={
                        ...deletedPost,
                        ...postData
                    }
               
                    this.posts[index]=updatedPost
                    return this.posts
               }


                    deletePost(id: number) {
                    const index = this.posts.findIndex(post => post.id === id);
                    if (index === -1) throw new NotFoundException(`post with ${name} not found`);

                    const [deletedPost] = this.posts.splice(index, 1);
                    return this.posts;
                    }


}
