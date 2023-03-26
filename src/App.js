import React from "react";
import { BrowserRouter as Router,Route, Routes,Link, BrowserRouter } from 'react-router-dom';
import CreatePost from "./CreatePost";
import HomePage from "./HomePage";
import Login from "./Login";


function App() {

 
  const [loggedIn, setLoggedIn] = React.useState(false);



  function signout()
  {
    //Navigate to login page
    // console.log(window.location.pathname)
    window.location.pathname = "/login"
  }

  return (
  <div>
    
    <BrowserRouter>
   
      <li> <Link to="/home">Home</Link></li>
        <li> <Link to="/create">Create Post</Link></li>
      
      {loggedIn ? <button onClick={signout}>Logout</button> :<li><Link to="/login">Login</Link></li> }

      
        <Routes>
        <Route exact path="/home" element={<HomePage/>} />
        <Route exact path="/create" element={<CreatePost/>}/>
        <Route exact path="/login" element={<Login data={setLoggedIn}/>}/>
        </Routes>
        
        </BrowserRouter>

  
    

  </div>
  );
}

export default App;

// install firebase(npm install firebase)