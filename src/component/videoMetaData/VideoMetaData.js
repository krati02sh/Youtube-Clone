import React from 'react'
import "./videoMetaData.scss"
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
const VideoMetaData = () => {
  return (
    <div className='py-2 videoMetaData'>
      <div className='videoMetaData__top'>
         <h5>Video Title</h5>
          
          <div className='d-flex justify-content-between'>
            <div className='py-1 d-flex justify-content-between align-items-center'>
               <span>
                  {numeral(10000).format('0.a')} Views •{' '}
                  {moment('2020-12-10').fromNow()}
               </span>
             </div>
               <div>
                 <span className='mr-5'>
                     <MdThumbUp size={26} /> {numeral(10).format('0.a')}
                  </span>
                  <span className='mr-3 ml-3'>
                     <MdThumbDown size={26} />{' '}
                     {numeral(30).format('0.a')}
                  </span>
               </div>
            </div>
       
     </div>
     <div className='videoMetaData__channel d-flex justify-content-between align-items-center'>
      <div className='d-flex'>
           <div>img</div>
           <div className='d-flex flex-column'>
                  <span>channelTitle</span>
                  <span>
                     {' '}
                     {numeral(10000).format(
                        '0.a'
                     )}{' '}
                     Subscribers
                  </span>
               </div>
         </div>
         <button
               className=' p-2 m-2 border-0 btn' >
                subscribe
            </button>
     </div> 
     
     <div className='videoMetaData__description'>
     Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tcaecat cupidatat non consectetur adipiscing elit, sed do eiusmod tcaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </div>  
    </div>
  )
}

export default VideoMetaData
