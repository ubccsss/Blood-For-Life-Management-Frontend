

import React from 'react';

interface EventProps {
  key: number;
  name: string;
  start: string;
  end: string;
  volunteers: number;
  description: string;
}

const Event: React.FC<EventProps> = (props) => {
  return (
    <div className="flex flex-col p-4">
      <a className="text-4xl py-2 font-bold hover:bg-slate-700" href="/">{props.name}</a>
      <hr className="rounded py-2"></hr>
      <div className="text-lg py-2">Start time: {props.start} - End time: {props.end}</div>
      <div className="flex flex-row py-2">
        <div className="text-lg">Seeking </div>
        <div className="text-lg px-1 font-black underline"> {props.volunteers} </div>
        <div className="text-lg">volunteers</div>
      </div>
      <p className="text-lg py-2">{props.description}</p>
    </div>
  );
}

export default Event;