import React from 'react'
import {connect} from 'react-redux'
import Movielist from './Movielist';

const Description = (props) => {
    return ( <div>
        {console.log(props)}
        {props.Movielist.filter(el=>el.id===Number(props.match.params.id)).map(el=><p>{el.description}</p>)}
    </div> );
}
 
const mapStateToProps=(state)=> {
    return {
        Movielist : state.MovieList
    }
}


export default connect(mapStateToProps,null)(Description);