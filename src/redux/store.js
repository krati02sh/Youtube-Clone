import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools}  from 'redux-devtools-extension'
import {thunk} from 'redux-thunk' 
import {authReducer} from './reducer/auth.reducer'
import {homeVideosReducer} from './reducer/video.reducer'


 const rootReducer=combineReducers({
   auth:authReducer,
  homevideos:homeVideosReducer
 })
const store=createStore(rootReducer,{},
    composeWithDevTools(applyMiddleware(thunk)))
 

export default store