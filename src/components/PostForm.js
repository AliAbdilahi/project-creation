import React, { useState} from 'react'
/*import Axios from 'axios'*/
function PostForm() {
    const url=""
    const [data, setData]= useState({
        name: "",
        title: "",
        link: "",
        description:"",
        contributors:"",
        image:""
    })
    function submit(e){
        e.preventDefault();
        /*FOR THE BACKEND XD
        Axios.post(url, {
            name:data.name,
            title: data.title,
            link: data.link,
            description: data.description,
            contributors: data.contributors
        })
            .then(res =>{
                console.log(res.data)
            })*/
        console.log(data)
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
    }
  return (
    <div class="publish">
        <form onSubmit={(e) => submit(e)}>
            
            <label ><p>Full name*:</p> </label>
            <p><input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='Full name' type='text'></input></p>
           
            <label>Project title*:</label>
            <p><input onChange={(e)=>handle(e)} id="title" value={data.title} placeholder='title' type='text'></input></p>
            <label class="link"><p>Project Link:</p></label>
            <p><input onChange={(e)=>handle(e)} id="link" value={data.link} placeholder='link' type='text'></input></p>
            <label><p>Description*:</p></label>
            <p><textarea onChange={(e)=>handle(e)} id="description" value={data.description} placeholder='description' type="textarea"></textarea></p>
            <label><p>Contributors*:</p></label>
            <p><textarea onChange={(e)=>handle(e)} id="contributors" value={data.contributors} placeholder='contributors' type='text'></textarea></p>
            <label><p>Project Cover Image*:</p></label>
            <p><input class="custom-file-input" onChange={(e)=>handle(e)} id="image" value={data.image} type="file"></input></p>
            <p><button class="btn-grad">Publish</button></p>
        </form>
        
    </div>
  )
}
export default PostForm;
