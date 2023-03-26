import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { database } from './firebase'

function CreatePost() {


  const navigate = useNavigate()

  const [myTitle, setMyTitle] = React.useState("")

  const [myDescription, setMyDescription] = React.useState("")

  function collectTitle(event)
  {
    setMyTitle(event.target.value)
  }

  function collectDescription(event)
  {
    setMyDescription(event.target.value)
  }

  function addPostData()
  {
    //Logic to send the data from useState() to firestore database

    const collectionName = collection(database, "postdata")

    addDoc(collectionName, {
        title: myTitle,
        description: myDescription  
    })

    //Navigate back to home page("/home")

    navigate("/home")

  }

  return (
    <div>
      Title: <input type="text" onChange={collectTitle}/><br></br><br></br>
      Description: <textarea onChange={collectDescription}></textarea><br></br><br></br>
      <button onClick={addPostData}>Add Post</button>
    </div>
  )
}

export default CreatePost;