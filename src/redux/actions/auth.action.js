import firebase from 'firebase/compat/app'
import auth from '../../firebase'
import { LOGIN_REQUEST ,LOGIN_SUCCESS,LOAD_PROFILE,LOGIN_FAIL} from '../actionTypes'


export const login = () => async dispatch => {
    try {
        dispatch({
            type:LOGIN_REQUEST,
        })
 
       const provider = new firebase.auth.GoogleAuthProvider()
       provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
       const res= await auth.signInWithPopup(provider)
       //console.log(res)
     const accessToken=res.credential.accessToken
     const profile = {
        name: res.additionalUserInfo.profile.name,
        photoURL: res.additionalUserInfo.profile.picture,
     }
     dispatch({
        type: LOGIN_SUCCESS,
        payload: accessToken,
     })
     dispatch({
        type: LOAD_PROFILE,
        payload: profile,
     })

    } 
    catch (error){
        console.log(error.message)
      dispatch({
         type: LOGIN_FAIL,
         payload: error.message,
      })
    }
}
