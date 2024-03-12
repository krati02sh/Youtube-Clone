import axios from 'axios'
//console.log(process.env.REACT_APP_YT_API_KEY)
//const Key="AIzaSyBB2tZhaU3lspqOLkHifwl5_q3hQzoCcjA"
const Key="AIzaSyD2NJ5VC41-VMWP7FBu9kAUfq7tGznKHn8"
const request=axios.create({
   // credentials: 'include',
    baseURL:'https://youtube.googleapis.com/youtube/v3',
    params:{
        key:Key,}
})
export default request