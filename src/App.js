import React,{useState,useEffect} from 'react'
import {Container} from "react-bootstrap"
import Header from "./component/Header"
import Sidebar from "./component/sbar/Sbar"
import  Homescreen from "./screens/homescreen/Homescreen"
import  Loginscreen from "./screens/loginscreen/Loginscreen"
import {Routes,Route,useNavigate} from "react-router-dom"
//import { useSelector } from 'react-redux'
import "./_app.scss"
import WatchScreen from './screens/watchScreen/WatchScreen'
  const Layout = ({children}) =>{
    const [sidebar, toggleSidebar] = useState(false)
 
    const handleToggleSidebar = () => toggleSidebar(value => !value)
    return(
      <>
    <Header handleToggleSidebar={handleToggleSidebar} />
    <div className="app__container ">
    <Sidebar sidebar={sidebar}
       handleToggleSidebar={handleToggleSidebar}
    />
     <Container fluid className="app_main ">
        {children}
        </Container>
    </div>
    </>

    )
  }
  const App = () => {
   // const { accessToken, loading } = useSelector(state => state.auth)
   /* const navigate = useNavigate()
    useEffect(() => {
       if (!loading && !accessToken) {
          navigate('/login')
       }
    }, [accessToken, loading, navigate])
  */
    
 
  return (
    

   
    <Routes>
      <Route path="/" element={(
      <Layout>
        <Homescreen />
      </Layout>
    )}
  />
  <Route path="/search" element={(
      <Layout>
        <h1>search result</h1>
      </Layout>
    )}
    />
    <Route Link to path="/watch" element={(
      <Layout>
        <WatchScreen/>
      </Layout>
    )}
  />
 <Route Link to exact path="/login" element={(<Loginscreen/> )}/>
    </Routes>
    
   
  
  )
  }


export default App
