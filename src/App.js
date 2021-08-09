import React,{useState,useEffect} from 'react';
// import ErrorMessage fro./Components/ErrorMessage/abage';
import Header from './Components/Header/Header';
import Details from './pages/Details';
import Main from './pages/Main';
import { Switch, Route } from "react-router-dom";
import Loading from './pages/Loading';
import Ab from './Components/InvalidName/InvalidName';
import ErrorPage from './pages/ErrorPage';

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
  }, [])
  return (
    <>
      {/* { loading ? <Loading /> :
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:name" component={Details} />
          </Switch>
          </div>
      }       */}
    <ErrorPage/>
    </>
  );
}

export default App;
