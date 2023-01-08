import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Akun from './components/akun/Akun';
import Verifikasi from './components/akun/Verifikasi';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Akun} />
        <Route path="/akun" component={Akun} />
        <Route path="/verifikasi" component={Verifikasi} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
