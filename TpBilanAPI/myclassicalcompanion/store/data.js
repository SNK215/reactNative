import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
    name : 'data',
    initialState : {
        periods : [
        {name:"Medieval",endpoint:"/composer/list/epoch/Medieval.json",color:'#f5428d'},
        {name:"Renaissance",endpoint:"/composer/list/epoch/Renaissance.json",color:'#f54242'},
        {name:"Baroque",endpoint:"/composer/list/epoch/Baroque.json",color:'#f5a442'},
        {name:"Classical",endpoint:"/composer/list/epoch/Classical.json",color:'#f5d142'},
        {name:"Early Romantic",endpoint:"/composer/list/epoch/Early Romantic.json",color:'#368dff'},
        {name:"Romantic",endpoint:"/composer/list/epoch/Romantic.json",color:'#41d95d'},
        {name:"Late Romantic",endpoint:"/composer/list/epoch/Late Romantic.json",color:'#9eecff'},
        {name:"20th Century",endpoint:"/composer/list/epoch/20th Century.json",color:'#b9ffb0'},
        {name:"Post-War",endpoint:"/composer/list/epoch/Post-War.json",color:'#ffc7ff'},
        {name:"21st Century",endpoint:"/composer/list/epoch/21st Century.json",color:'#47fced'},
        ],
        baseApi:"https://api.openopus.org"
    },
    reducers : {
    }
})

export default data.reducer;