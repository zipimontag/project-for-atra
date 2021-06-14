import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
<div className="App">
         <Router>
            <Home></Home>
         </Router>
    </div>
    </Provider>  
   
  );
}

export default App;
