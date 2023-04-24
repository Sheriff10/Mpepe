import logo from "./logo.svg";
import "./App.css";
import "./css/global.css";
import { Header } from "./components/header";
import { Intro } from "./components/intro";
import { About } from "./components/about";
import { HTB } from "./components/how_to_buy";
import { Tokenomics } from "./components/tokenomics";
import { Contact } from "./components/contact";

function App() {
   return (
      <div className="App">
         <div className="wrapper">
            <Header />
            <Intro />
         </div>
         <About />
         <HTB />
         <Tokenomics />
         <Contact />
      </div>
   );
}

export default App;
