// posts will be populated at build time by getStaticProps()
import fs from 'fs';
import path from 'path'
import React, { useState } from 'react';

function HomePage({ products }) {
    const [counter, setCounter] = useState(0);

    function incrementCounterHandler() {
        setCounter((prevCounter) => prevCounter + 1);
    }
    function decrementCounterHandler() {
        setCounter((prevCounter) => prevCounter - 1);
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
            <li key="teszt"> {counter} </li>
            <button onClick={incrementCounterHandler}>Increment</button>
            <button onClick={decrementCounterHandler}>Decrement</button>
        </ul>
    )
}

export async function getStaticProps() {
    const filePath = path.join('data', 'products.json');
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData);

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            products: data.products
        }
    }
}

export default HomePage