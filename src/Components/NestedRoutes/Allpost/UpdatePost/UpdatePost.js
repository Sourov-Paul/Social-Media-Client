import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UpdatePost.css';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const UpdatePost = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();

    const {updateId}=useParams();

    const [singleArticle,setSingleArticle]=useState({})
    const [success,setSuccess]=useState(false)

    // update post
        const onSubmit=(data)=>{
          
            fetch(`http://localhost:5000/updatePost/${updateId}`,{
                method:'PUT',
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data) 
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.modifiedCount===1){
                    setSuccess(true)
                }
                else{
                    setSuccess(false)
                    return
                }
            });
        }
        

    useEffect(()=>{
        fetch(`http://localhost:5000/singleArticle/${updateId}`)
        .then(res=>res.json())
        .then(data=>setSingleArticle(data))
    },[updateId])

    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
<input  defaultValue={singleArticle.title} {...register ('title')} />
<input defaultValue={singleArticle.title2} {...register ('title2')} />
<input type="submit" />
</form>
        {singleArticle.title}
        {
            success && <h2 style={{color:'green'}} >Update Successfully</h2>
        }
        </div>
    );
};

export default UpdatePost;