import React, { useEffect, useMemo, useRef, useState } from 'react';
import './index.css';
import MyButton from './components/UI/OI/MyButton';
import PostList from './components/PostList';
import MyInput from './components/UI/OI/Input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/OI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/Mymodal/MyModal';
import { usePosts } from './hooks/UsePosts';
import Postservise from './API/Postservise';
import Loading from './components/UI/OI/Loading/Loading';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/getPageCount';
import Pagination from './components/UI/OI/Pagination';

function Posts() {
  const [posts, setPosts] = useState([
    {id: 1, title :'Javascript',body: "descrition" },
    {id: 2, title :'Javascript2',body: "descrition" },
    {id: 3, title :'Javascript3',body: "descrition" }
  ])
 const [filter, setFilter] = useState({sort:'', query:''})

const [modal,setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

const [fetchPosts,isPostloading, postError] = useFetching(async () =>{ 
  const posts = await Postservise.getAll(limit, page)
  setPosts(posts.data)
  const setTotalCount = posts.headers['x-total-count']
  setTotalPages(getPageCount(setTotalCount, limit) )
  
})


useEffect(()=> {
  fetchPosts()
},[page, limit])


const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p =>p.id !== post.id))
  }
  const SortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)
  useEffect(()=>{
    fetchPosts ()
  },[])

  const changePage = (p)=>{
    setPage(p)
  }


  return (
    <div className="index">
      <MyButton style={{marginTop: 30}} onClick={ () => setModal(true)}>
        Создать пользователя
      </MyButton>
    <MyModal visable={modal} setVisable = {setModal}>
      <PostForm create = {createPost}/>
      </MyModal>
    
    <hr style={{margin: '15px 0 '}}/>
    <PostFilter filter={filter} setFilter={setFilter}/>
    <MySelect 
    value={limit} 
    onChange ={value =>setLimit(value)}
    defaultValue='Кол-во элементов'
    options={[
      {value:5, name: '5'},
      {value:10, name: '10'},
      {value:-1, name: 'Вся лента'},
    ]}></MySelect>
    {isPostloading? 
    <div style = {{display:'flex', justifyContent:'center', marginTop:'10px'}}> <Loading/> </div>
    :<PostList remove ={removePost} posts = {SortedAndSearchedPost} title='Список постов'/>}
     <Pagination totalPages = {totalPages} page={page} changePage={changePage} />
    

     
    </div>
  );
}

export default Posts;
