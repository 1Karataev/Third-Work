import React from 'react';
import PostItem from './PostItem';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
const PostList = ({posts, title, remove})=>{
 if(!posts.length){
   return <h1 style={{textAlign: 'center'}}>Постов пока нет</h1> 
 }
 
  return(
    <div>
       <h1 style={{textAlign:'center'}}>{title}</h1>
       <TransitionGroup>
          {posts.map((post,i)=> 
          <CSSTransition
          key = {post.id}
          timeout={500}
          classNames = 'post'>
            
          <PostItem remove = {remove} number = {post.id} post ={post}/>
          </CSSTransition>
          )}
       </TransitionGroup>
     
    </div>
  )
}
export default PostList;