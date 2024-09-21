import logo from './logo.svg';
import './App.css';
import MarkShit from './MarkShit';

function App() {
  return (
    <div className="App">
      <MarkShit studentName="honey" engmarks='95' telugumarks='91'
      hindimarks='85' sciencemarks='70' mathsmarks='85' socialmarks='76'></MarkShit>



      <MarkShit studentName="siri" engmarks='90' telugumarks='81'
      hindimarks='85' sciencemarks='60' mathsmarks='75' socialmarks='76'></MarkShit>



      <MarkShit studentName="akshi" engmarks='65' telugumarks='71'
      hindimarks='55' sciencemarks='20' mathsmarks="75" socialmarks='86'></MarkShit>



      <MarkShit studentName="akhi"engmarks='65' telugumarks='61'
      hindimarks='95' sciencemarks='80' mathsmarks='15' socialmarks='78'></MarkShit>
    </div>
  );
}

export default App;
