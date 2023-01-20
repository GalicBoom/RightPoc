import React, { SetStateAction, useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRoute } from 'react-router5';





const NovoPost = () => {

  const { router } = useRoute();


const [title,setTitle] = useState();
const [body,setBody] = useState();
const  {register, handleSubmit, formState: {erros}} = useForm();

const onError = () => {console.log("falha")};

const creatingPost = (data,event) => {
  event.preventDefault();
  

  console.log(event);

  
  const newBody = data.body;
  const newTitle = data.title;

  console.log(newBody);
  console.log(newTitle);
  
  //setBody(newBody);
  //setTitle(newTitle);
  
  const post = {newTitle,newBody,userId: 1};

  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: post.newTitle,
      body: post.newBody,
      userId: post.userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
   

    router.navigate('home',{section:'home'});
    //console.log(title, body);
    //navigate("/");
   
  }






  return (
    <div className="h2 new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={handleSubmit(creatingPost, onError)}>
        <div className="form-control">
          <label htmlFor='title'>Título</label>
          <input type="text" name="title" placeholder='Digite o título' id="title"  {...register("title")}/>
        </div>
        <div className="form-control">
          <label htmlFor='body'>Conteúdo</label>
          <textarea name= "body" placeholder='Digite o conteúdo' id="body" {...register("body")}/>
        </div>
        <input name= "nomeDoInput" type="submit" value="Criar post" className="pr-1 rounded-full bg-gray-800 p-1 text-white-400 hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 w-20"/>
      </form>
    </div>
  )
}

export default NovoPost