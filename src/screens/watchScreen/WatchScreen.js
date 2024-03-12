import React from 'react'
import "./WatchScreen.scss"
import { Row ,Col} from 'react-bootstrap'
import VideoMetaData from '../../component/videoMetaData/VideoMetaData'
import VideoHorizontal from '../../component/videoHorizontal/VideoHorizontal'
import Comments from '../../component/comments/Comments'

const WatchScreen = () => {
  return (
    <Row>
         <Col lg={8}>
            <div className='watchScreen__player'>
               <iframe
                  src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                 
                  title='mytitle'
                  allowFullScreen
                  width='100%'
                  height='100%'></iframe>
            </div>
            <VideoMetaData/>
            <Comments/>
            </Col>
            <Col lg={4}>
            {[...Array(10)].map(()=>(
            <VideoHorizontal/>
            ) )}
            
            </Col>
            
           </Row>


  )
}

export default WatchScreen
