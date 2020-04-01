const init = [
    {id:1,title:"DORRA"
    ,img:"https://fr.web.img6.acsta.net/pictures/19/07/09/16/20/2730316.jpg",
    rating:4,
    description:"Cut from the same rough cloth as its predecessors, Angel Has Fallen rounds out a mostly forgettable action trilogy in fittingly mediocre fashion."},
    {id:5,
     title:"WAR",
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/War_official_poster.jpg/220px-War_official_poster.jpg"
    ,rating:4,
    description:"Cut from the same rough cloth as its predecessors, Angel Has Fallen rounds out a mostly forgettable action trilogy in fittingly mediocre fashion."},
   {id:6,
    title:"SOL",
   img:"https://fr.web.img6.acsta.net/pictures/19/11/14/11/00/4656952.jpg"
   ,rating:4,
   description:"Cut from the same rough cloth as its predecessors, Angel Has Fallen rounds out a mostly forgettable action trilogy in fittingly mediocre fashion."},  
   {id:7,
     title:"ANGEL HAS FALLEN",
    img:"https://media.senscritique.com/media/000018630904/325/Once_Upon_a_Time_in_Hollywood.jpg"
    ,description:"Cut from the same rough cloth as its predecessors, Angel Has Fallen rounds out a mostly forgettable action trilogy in fittingly mediocre fashion."},
    
]




const MovieListReducer=(state=init,action)=> {
    if(action.type==="ADD_MOVIE") {
        return [...state , action.payload]
    }else if(action.type==="DELETE") {
        return state.filter(el=>el.id !==action.payload)
    }else if(action.type ==="EDIT") {
        return state.map(el=>el.id===action.payload.id ? {...action.payload}:el)
    }
   return state
}

export default MovieListReducer