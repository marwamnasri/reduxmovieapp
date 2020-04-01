const Displayreducer=(state=false,action)=> {
    if(action.type==="DISPLAY") {
        return !state
    }else return state
}

export default Displayreducer