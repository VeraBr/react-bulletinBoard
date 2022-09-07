import './App.css';
import BulletinBoard from './components/BulletinBoard';

function App() {
  
  return (
    <div className="App">
      <h1>Anslagstavla</h1>

      <div className='Board'>
        <BulletinBoard />
      </div>

    </div>
  );
}

export default App;
