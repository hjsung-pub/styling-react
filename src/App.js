import './common.css';
import './style.css';
import './style.scss';
import CssStyleMode from './component/CssStyleMode';
import ScssStyleMode from './component/ScssStyleMode';
import StyledComponentMode from './component/StyledComponentMode';

function App() {
  return (
    <div className="wrapper"> 
      <CssStyleMode></CssStyleMode>
      <ScssStyleMode></ScssStyleMode>
      <StyledComponentMode></StyledComponentMode>
    </div>
  );
}

export default App;
