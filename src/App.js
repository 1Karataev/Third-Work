import React, { useEffect, useMemo, useRef, useState } from 'react';
import './index.css';
import Posts from './Posts';
import PostId from './components/PostId';
 import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import MyButton from './components/UI/OI/MyButton';

function App() {
 


  return (
   
   <BrowserRouter>
       <Link to='https://1karataev.github.io/third-work' style={{position:'absolute', right:'20%', color:'teal', top:'30px'}}>Посты</Link>  
     <Routes>
       
      <Route  path='https://1karataev.github.io/third-work' element ={<Posts/>}/>
      <Route  path='https://1karataev.github.io/third-work//:id' element ={<PostId/>}/>
     </Routes>
     
        
   </BrowserRouter>
   
   
  );
}

export default App;
