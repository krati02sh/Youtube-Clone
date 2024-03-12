import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'

import "./logscreen.scss"
const Loginscreen = () => {
  const dispatch = useDispatch()

 const accessToken = useSelector(state => state.auth.accessToken)

  const handleLogin = () => {
     dispatch(login())
  }
  const navigate= useNavigate()
  useEffect(() => {
    if (accessToken) {
       navigate('/')
    }
 }, [accessToken, navigate])


  return (
    <div className="login">
     <div className="login__container">
     <img
     src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
     <button onClick={handleLogin}>Login with google</button>
     
     </div>
      
    </div>
  )
}

export default Loginscreen
