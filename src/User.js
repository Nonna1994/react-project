 import Age from "./Age.js";
 
 export default function User (props){
     return(
         <div>
             My name is {props.name}  and <Age birthYear={props.birthYear}/>
         </div>
     )
 }