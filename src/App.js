import logo from './logo.svg';
import './App.css';
// import Chatbot from './components/ChatBot';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChatGPT from './components/ChatGPT/ChatGPT';
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()


function App() {
  return (
    <div className="App">
       <Header></Header>
       <ChatGPT></ChatGPT>
      <Footer></Footer>
      {/* <Chatbot></Chatbot> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
