
import React, { useContext } from 'react';
import TesztContext from '../store/first-context';

import Layout from '../components/layout';

export default () => {
  let data = {
    "products": [
      { "id": "p1", "title": "Product 1" },
      { "id": "p1", "title": "Product 1" },
      { "id": "p1", "title": "Product 1" }
    ]
  }


  let mycontext = useContext(TesztContext);

  // console.log(this.props);
  const renderTable = () => {
    return data.products.map((product) => {
      const { id, title } = product
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
        </tr>
      )
    })
  }

  return (<div>
    <table id='products'>
      <tbody>
        {renderTable()}
      </tbody>
    </table>
  </div>
  );
};

