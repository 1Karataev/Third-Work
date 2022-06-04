import React, { useEffect, useMemo, useRef, useState } from 'react';
import './index.css';
import Posts from './Posts';
import PostId from './components/PostId';
 import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  Routes
} from "react-router-dom";
import MyButton from './components/UI/OI/MyButton';

function App() {
 


  return (
   
   <BrowserRouter>
       <Link to='#' style={{position:'absolute', right:'20%', color:'teal', top:'30px'}}>Посты</Link>  
     <Routes>
       
      <Route  path='#' element ={<Posts/>}/>
      <Route  path='#/:id' element ={<PostId/>}/>
     </Routes>
     
        
      
        

    
   </BrowserRouter>
   
   
  );
}

export default App;
