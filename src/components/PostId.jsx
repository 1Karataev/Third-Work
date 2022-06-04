import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Postservise from "../API/Postservise";
import { useFetching } from "../hooks/useFetching";
import Loading from "./UI/OI/Loading/Loading";

const PostId = ()=>{
  const [post, setposts] = useState({})
  const [comments, setcomments] = useState([])
  const params = useParams()
  const [fetching, isLoading, error] = useFetching( async ()=>{
    const response = await Postservise.getbiId(params.id)
    setposts(response.data)
    
  })
   const [commentfetching, iscommentLoading, commenterror] = useFetching( async ()=>{
    const response = await Postservise.getbicom(params.id)
    setcomments(response.data)
  })
  useEffect(()=>{
    fetching(params.id)
    commentfetching(params.id)
  },[])
  return(
   
    <div className="index">
    
    { isLoading ? <Loading/>
      : <div> {post.title}</div>

    }
    {iscommentLoading
    ? <Loading/>
  : <div > 
    {comments.map((comm)=> 
    <div style={{marginTop:'25px'}}>
    <h4> <b>{comm.email}</b></h4> 
    <div>{comm.body}</div>
    </div>
    )}
  </div> 
  }
   </div> 
  )

}
export default PostId