import React from 'react';
import {connect} from 'react-redux';
import HOC from "./HOC";
import { Link} from "react-router-dom";



const Movielist=(props)=>{
    return(<div className="bloc1">
        <div className="plus"><h2 onClick={()=>props.display()}>+</h2></div>
        
        
        {props.MovieList.filter(el=>el.title.includes(props.search.trim())&&el.rating<props.star).map((el,i)=><div className="bb" >
    
        <span>{"".padEnd(el.rating,"⭐")}</span>
        <img src={el.img}/>
        <h6>{el.title} </h6>
        <Link to = {`/Description/${el.id}`}>
                  See Description
                </Link>
        <button className="btn1" onClick={()=>props.delete(el.id)}>Delete</button>
        <button className="btn2" onClick={()=>props.edit(el.id)}>Edit</button>
        </div>
        )}
        


    </div>)
}
const mapStateToProps=(state)=>{
    return{
        MovieList: state.MovieList,
        search: state.search,
        star: state.star,
        display:state.display
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        display : ()=> dispatch({type:"DISPLAY"}), 
    delete:(id)=>dispatch({type:"DELETE", payload:id}),
    edit:(id=>dispatch({type:"EDIT", payload:{
        title:prompt("title"),
        rating:prompt("rating"),
        img:prompt("img"),
        description:prompt("description"),
        id: id}
    }))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HOC(Movielist))