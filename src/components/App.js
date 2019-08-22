import React from 'react';
import PostList from './PostList';
import ModalBox from './Modal';
import history from './history';
import {Router,Route} from 'react-router-dom';


const App = () => {
  return (
    <div >
      <Router history={history}>
        <div>
          <Route path='/' exact component={PostList}/>
          <Route path='/modalbox/:Id' component={ModalBox}/>

        </div>
      </Router>
    </div>
  );
};

export default App;