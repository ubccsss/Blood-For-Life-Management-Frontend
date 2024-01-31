export default function Event(props) {
    return (
      <div className="flex items-center justify-center">
        <h2>{props.name}</h2>
        <h3>{props.start} to {props.end}</h3>
        <h3>Seeking {props.volunteers} volunteers</h3>
        <p> {props.description} </p>
        </div>
    )
  }