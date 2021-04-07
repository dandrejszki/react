
import React, { useContext } from 'react';
import TesztContext from '../store/first-context';

import Layout from '../components/layout';


const Eyes = ({ x, y, onClick }) => {
  return (
    <g onClick={onClick}>
      <circle cx={x - 18} cy={y} r={20} fill="white" />
      <circle cx={x + 18} cy={y} r={20} fill="white" />
      <circle cx={x - 10} cy={y} r={10} fill="black" />
      <circle cx={x + 10} cy={y} r={10} fill="black" />
    </g>)
};

const Body = ({ x, y, colour }) => {
  return (
    <g>
      <circle cx={x} cy={y} r={50} fill={colour} />
      <rect x={x - 50} y={y} width={100} height={80} fill={colour} />
    </g>
  )
};

const Ghost = ({ x, y, colour, onClick }) => {
  return (
    <g onClick={onClick}>
      <Body x={x} y={y} colour={colour} />
      <Eyes x={x} y={y} />
    </g>
  )
};

export default () => {

  let mycontext = useContext(TesztContext);

  return (<div>

    <p1>Teszt</p1>

    <svg viewBox="0 0 200 200">
      <g>
        <circle cx="50" cy="55" r="45" fill="blue" stroke="#F0CE01" strokeWidth="4" />
        <text textAnchor="middle" x="50" y="55" onClick={() => alert("hi")}> Circle Text</text>
      </g>
    </svg>



  </div >
  );
};

