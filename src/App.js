import React,{useState,useEffect} from 'react';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import Header from './Components/Header/Header';
import Details from './pages/Details';
import Main from './pages/Main';
import { Switch, Route } from "react-router-dom";
import Loading from './pages/Loading';

function App() {
  let [loading, setLoading] = useState(true);
  return (
    {loading ? <Loading/> : 'aaa'}
        <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route path="/:name" exact component={Details} /> */}
        </Switch>
      </div>
    
  
 
  );
}

export default App;
