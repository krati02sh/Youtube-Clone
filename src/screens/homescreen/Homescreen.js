import React ,{useEffect}from 'react'
import { Container,Row,Col } from "react-bootstrap"
import Video from "../../component/Video/Video"
import Categoriesbar from "../../component/categoriesbar/Categoriesbar"
import { getPopularVideos,getVideosByCategory } from "../../redux/actions/video.action"
import { useDispatch,useSelector} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

const Homescreen = () => {
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])

const {videos,activeCategory}=useSelector(state=>state.homevideos)
const fetchData = () => {
  if (activeCategory === 'All') dispatch(getPopularVideos())
  else {
     dispatch(getVideosByCategory(activeCategory))
  }
  }


  return (
     
     <Container>
      <Categoriesbar/>
      
      <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }>
       <Row>
       {videos.map((video)=>(
        <Col lg={3} md={4}>
        <Video video={video} key={video.id}/>
        </Col>
      ))}
      </Row>
      </InfiniteScroll>
      
      
      
      
     </Container>
    
  )
  
}

export default Homescreen
