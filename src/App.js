import logo from './logo.svg';
import './App.css';
import Signin from './componants/signin/signin';
import Signup from './componants/signup/signup';
import TakeNote1 from './componants/takenote1/takenote1';
import Takenote2 from './componants/takenote2/takenote2';
import Takenote3 from './componants/takenote3/takenote3';
import Dashboard from './componants/dashboard/dashboard';
import Router1 from './componants/router/router';
import PrimarySearchAppBar from './componants/header/headerMui';
import { Provider } from 'react-redux';
import store from './componants/redux/store';


function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <TakeNote1/> */}
      {/* <Takenote2/> */}
      {/* <Takenote3/> */}
      {/* <Dashboard/> */}
      {/* <PrimarySearchAppBar/> */}
      <Provider store={store}>
        <Router1 />
      </Provider>
    </div>
  );
}
export default App;