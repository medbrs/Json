import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route} from 'react-router-dom'
import Posts from './Posts'
import Comments from './Comments'


ReactDOM.render(<Provider store={store} >
                    <BrowserRouter>
                    <Route exact path ='/' component={App}/>
                    <Route exact path ='/posts/:id' component={Posts}/>
                    <Route exact path ='/comments/:id' component={Comments}/>
                  </BrowserRouter>
          
    
     </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
