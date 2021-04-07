//Things in this file will be applied globally to next.js
import 'bootstrap/dist/css/bootstrap.css';
import { TesztContextProvider } from '../store/first-context';
//import TesztContext from '../store/first-context';

// const AppComponent = ({ Component, pageProps }) => {
//     return <Component {...pageProps} />
// };

const AppComponent = ({ Component, pageProps }) => {

    //let somedata = { valami }
    return (
        <TesztContextProvider>
            <Component {...pageProps} />
        </TesztContextProvider>

    );
}

export default AppComponent;
