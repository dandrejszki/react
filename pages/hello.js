
import React, { useContext } from 'react';
import TesztContext from '../store/first-context';
import Link from 'next/link';

export default () => {
    let mycontext = useContext(TesztContext);
    // console.log(this.props);
    return (
        <div><h1> Hello! + {mycontext.count} </h1>
            <button onClick={mycontext.increase}>Increment</button>
            <button onClick={mycontext.decrease}>Decrease</button>
            <Link href='/test'>Hello</Link>
        </div>
    );
};
