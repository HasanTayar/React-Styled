export default function Names({props}){
    return(
        <div>
        <h3>Names</h3>
        <ul>
        {props.map((props) => (
          <li key={props.id} > {props.name} </li>
        ))}
         </ul>
         </div>
    )

}