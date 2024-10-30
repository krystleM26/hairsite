
import './App.css';
import GlitterBackground from './components/glitter-bg'
import useStarryBackground from './components/hooks/starryBackground';

function App() {
  useStarryBackground()
  return (
    <div className="App">
      <GlitterBackground />
      
    </div>
  );
}

export default App;
