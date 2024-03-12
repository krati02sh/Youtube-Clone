import { HOME_VIDEO_FAIL, HOME_VIDEO_REQUEST,HOME_VIDEO_SUCCESS } from '../actionTypes'
import request from '../../api'

export const getPopularVideos = () => async (dispatch,getState)=> {
    try{
        dispatch({
            type:HOME_VIDEO_REQUEST,
        })
       const {data}= await request('/videos',{
            params:{
                part:'snippet,contentDetails,statistics',
                chart:"mostPopular",
                regionCode:"IN",
                maxResults:20,
                pageToken: getState().homevideos.nextPageToken,
            },
        })

        dispatch({
            type:HOME_VIDEO_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                loading:false,
                category:'All',
                

            },
        })
      

    }catch (error){
        if(error.response){
       console.log(error.response);
       dispatch({
        type:HOME_VIDEO_FAIL,
        payload:error.response
       })

         }
        else if(error.message){
            console.log(error.response);
            dispatch({
             type:HOME_VIDEO_FAIL,
             payload:error.message
            })
     
              }
        else if(error.request){
                console.log(error.response);
                dispatch({
                 type:HOME_VIDEO_FAIL,
                 payload:error.request
                })
            }
    }
}
export const getVideosByCategory = (keyword) => async (dispatch,getState) => {
    try{
        dispatch({
            type:HOME_VIDEO_REQUEST,
        })
       const {data}= await request('/search',{
            params:{
                part:"snippet",
                
                maxResults:20,
                pageToken:getState().homevideos.nextPageToken,
                q:keyword,
                type:'video',
            },
        })

        dispatch({
            type:HOME_VIDEO_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:keyword,
                

            },
        })
      

    }catch (error){
        console.log(error.message)
        dispatch({
            type:HOME_VIDEO_FAIL,
            payload:error.message,
        })
    }
}