//Things in this file will be applied globally to next.js
import { createContext, useState } from 'react';

const TesztContext = createContext({
  count: 3,
  gyumolcs: '',
  gyumolcsCsere: function () { },
  increase: function () { },
  decrease: function () { }
}
);

export function TesztContextProvider(props) {

  const [counter, setCounter] = useState(4);
  const [gyumolcs, setGyumolcs] = useState("alma");

  function increaseHandler() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  const gyumolcsHandler = event => {
    //event.preventDefault();
    setGyumolcs((prevGyumolcs) => event.target.value);
  }
  function decreaseHandler() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  const dummy = { count: counter, gyumolcs: gyumolcs, gyumolcsCsere: gyumolcsHandler, increase: increaseHandler, decrease: decreaseHandler };

  return (
    <TesztContext.Provider value={dummy}>
      { props.children}
    </ TesztContext.Provider>
  );
}

export default TesztContext;
