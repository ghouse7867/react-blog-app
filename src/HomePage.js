import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { database } from './firebase'

function HomePage() 
{

  const [fetchedData, setFetchedData] = React.useState([])

  React.useEffect(function()
  {
    //Write the logic to read the data from database and display it
    const collectionName = collection(database, "postdata")

    getDocs(collectionName)
    .then(function(output)
    {
      console.log(output)
      setFetchedData(output.docs)

    })
    .catch(function(e)
    {
      alert(e)
    })
  })

  return (
    <div>
      {
        fetchedData.map(function(i)
        {
          return(
            <div>
              <h2>{i.data().title}</h2>
              <h3>{i.data().description}</h3>
            </div>
          ) 
          
        })
      }
    </div>
  )
}

export default HomePage