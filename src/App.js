import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBarMobile/NavBarMobile'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContext } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartContext.Provider value="">
        <div className="App">
          <NavBarMobile pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <NavBar />
          <div id="page-wrap">
            <Switch>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/category/:slug">
                <ItemListContainer />
              </Route>
              <Route path="/">
                <ItemListContainer />
              </Route>
            </Switch>
          </div>
        </div>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
