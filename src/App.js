import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Category from './Pages/Category';
import Home from './Pages/Home/Home';
import MobileApps from './Pages/MobileApps/MobileApps';
import Products from './Pages/More/Products';
import ThemeContex from "./ThemeContex";
import colors from "./Data/Colors";
function App() {
  const [theme, setTheme] = useState("light");
  const [selectedColors, setSelectedColors] = useState(colors.dark)

  useEffect(() => {
    setSelectedColors(colors[theme])
  }, [theme])
  return (
    <div className="App">
      <ThemeContex.Provider value={{ theme, setTheme, colors: selectedColors }}>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path="/mobileapps" component={MobileApps} />
          <Route path="/:category" exact component={Category} />
          <Route path="/:category/:id" component={Products} />
        </Switch>
      </ThemeContex.Provider>
    </div>
  );
}

export default App;
