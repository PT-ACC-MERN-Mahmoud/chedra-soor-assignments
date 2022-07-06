import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useParams } from "react-router";

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  )
}
const Word = (props) => {
  const {words} = useParams();
  return (
    <h1>{words}</h1>
  )
}
const ColorBackground = (props) => {
  const {deco, color, backCol} = useParams();
  return (
    <h1 style={{color: color, backgroundColor: backCol}}>{deco}</h1>
  )
}
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/home/"></Route>
      <Route element={<Word />} path="/:words/"></Route>
      <Route element={<ColorBackground />} path="/:deco/:color/:backCol/"></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
