import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/topbar/sidebar/Sidebar';
import Home from './pages/home/Home';
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';


function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;

  return (
    <Router>
      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <div className="home">
      {
      admin &&
      <>
      <Topbar />
      <div className="container">
      <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </div>
        </>
        }
        </div>
        </Switch>
    </Router>
  );
}

export default App;
