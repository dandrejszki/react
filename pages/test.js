
import React, { useContext } from 'react';
import TesztContext from '../store/first-context';

import Layout from '../components/layout';

export default () => {
  let mycontext = useContext(TesztContext);
  // console.log(this.props);
  return (
    <Layout><div><p1> Counter: {mycontext.count} </p1>
      <p1><br></br>Form:
      <select value={mycontext.gyumolcs} onChange={mycontext.gyumolcsCsere}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
      </p1>
      <p1><br />
        {mycontext.gyumolcs}
      </p1></div></Layout>
  );
};

