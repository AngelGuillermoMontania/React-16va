import ReactDOM from 'react-dom';
import {  BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getPokemons } from "./actions/index"

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
                {......}
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);