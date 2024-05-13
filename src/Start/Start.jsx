import React, { useEffect } from 'react'
import splashImage from "./splash.jpg"
import "./Splash.css"
import { useNavigate } from 'react-router'
import axios from 'axios';
import about from "./aboutmain.svg"


const Start = () => {

  const navigate = useNavigate();

  const checkingUserPresentorNot = async()=>{
    const axiosconfig = {
      headers:{
        "Accept":"application/json",
        "x-auth-token":localStorage.getItem("x-auth-token")
      }
    }
    try {
      const response = await axios.get("https://pro-planet-server.onrender.com/get-curr-user" , axiosconfig);

      if(response.status === 200){
        if(response.data.category === "user"){
          navigate("/Home")
        }
        else{
          navigate("/Adminhome")
        }
        
      }
      

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    checkingUserPresentorNot();
    
  } , []);
  
  return (
    
    <>
     <div className="splash-main">
        <img src={about} alt="splashImage" className="splash-image" />
        
        <div className="splash-text">
          <h1>Welcome To Green Gage💚 </h1>
          <p>
            Dive into a world where words and images converge to create powerful narratives. At our platform, we celebrate the art of storytelling and visual expression. Whether you're a seasoned writer or a budding artist, our community welcomes you to share your voice and showcase your creativity. Join us today to embark on a journey of exploration, connection, and inspiration. Together, let's bring stories to life and make an impact through the beauty of art and storytelling.
          </p>
        </div>
  
        <div className="submit-text" onClick={()=>{
          navigate("/Register")
        }} >
          <p>Get Started 👉</p>
        </div>
      </div>
    </>
  )
}

export default Start
