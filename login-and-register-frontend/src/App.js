import './App.css';
//import Homepage from './components/pages/homepage/Homepage';
import HeaderPage from './components/header/Header'
import RouterPage from './routes/Routes';
function App() {
  
  return (
    <div className="App">
    
      <HeaderPage/> 
      <RouterPage/>
    </div>
  );
}

export default App;
