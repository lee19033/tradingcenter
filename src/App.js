import './App.css';
import Footer from "./components/Footer.js";
import Navbar from "./components/NavBar.js";
import TopBar from "./components/TopBar.js"
import GoldChart from './components/GoldChart.js';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import About from "./pages/About.js";
import Contact from "./pages/contact.js";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div>
      <Router>
       <TopBar />     
       <Navbar />
         <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={GoldChart}></Route>
            <Route path="/" exact component={GoldChart}></Route>
            <Route path="/about"  component={About}></Route>
            <Route path="/contact"  component={Contact}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
