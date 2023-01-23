import React from 'react'
import { useEffect, useState } from 'react';
import { BaseLink, Link, useRoute } from 'react-router5';
import { Title } from '../styles/styles';
import { Fetch_line } from '../styles/styles';




export default function Fetch() {
    

        const [posts,setPosts] = useState([]);
        const { router } = useRoute();

        const fetchData = () => {
          const headers = { 'Content-Type': 'application/json' }
            fetch("https://jsonplaceholder.typicode.com/posts",{headers})
            .then((resp) => resp.json())
            .then((apiData) => {
                setPosts(apiData);
            })
            }
    
        const navigateDetalhe = (props) => {
        
          router.navigate('detalhe',{id:props.id, title:props.title, body:props.body},{reload: true});
        }

        useEffect(() => {
          fetchData();
        },[]) 

        return (
          <div>
              <Title>Lista de posts</Title>
              {posts.length === 0 ? <p>Carregando...</p> : (
              posts.map((post) => (
              <div className='post' key={post.id}>
              <h1>{post.title}</h1>
              <h2>{post.body}</h2>
              <button onClick={() => navigateDetalhe(post)}>Detalhe</button>
              <Fetch_line/>
             </div>
             ))
             )}
          </div>
        ) 
}
