import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard 
      title={"Doe, Jane"}
      age={25}
      color={"Purple"}
      />
      <PersonCard 
      title={"Smith, John"}
      age={31}
      color={"Blonde"}
      />
    </div>
  );
}

export default App;
