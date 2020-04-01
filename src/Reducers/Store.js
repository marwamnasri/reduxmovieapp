import { createStore, combineReducers } from "redux";
import Searchreducer from "./Searchreducer";
import Namereducers from "./Namereducers";
import Ratingreducers from "./Ratingreducers";
import Movielistreducers from "./Movielistreducers";
import Imgreducers from "./Imgreducers";
import Displayreducer from "./Displayreducer";
import Starreducer from "./Starreducer";


const Store = createStore (combineReducers({
     search :Searchreducer ,
     img: Imgreducers,
     name:Namereducers,
     rating: Ratingreducers,
     MovieList: Movielistreducers,
     display: Displayreducer,
     star: Starreducer
    
  
    
}))


export default Store