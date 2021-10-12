import './App.css';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import AddEditUser from './components/pages/AddEditUser';
import UserInfo from './components/pages/UserInfo';
import About from './components/pages/About';
import Header from './components/component/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import history from './history';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return <Provider store={store}>
      <Router history={history}>
        <ToastContainer/>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/add-user" component={AddEditUser}/>
        <Route path="/edit-user/:id" component={AddEditUser}/>
        <Route path="/user-info/:id" component={UserInfo}/>
        <Route path="/about" component={About}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  </Provider> 

}

export default App;
