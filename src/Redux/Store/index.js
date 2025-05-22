import { configureStore } from '@reduxjs/toolkit'
// import userdata from '../Slices/index'
import userdata from "/src/Redux/Slices/index.js"
const store = configureStore({
    reducer:{
        userdata:userdata
    }
})

export default store




 