
import './App.css';
import {useState, useEffect} from 'react';


  const Timer = ({hr, min, sec}) => {
    const [over, setOver] = useState(false);
    const [paused,setPaused] = useState(true)
    const [[h, m, s],setTime] = useState([hr,min,sec]);
    
    const tick = () => {
      if(paused || over){
        return;
      }
      if(h === 0 && m === 0 && s === 0 ){
        setOver(true)
      }else if (m === 0 && s === 0){
        setTime([h - 1, 59, 59])
      }else if (s === 0 ){
        setTime([h, m - 1, 59])
      }else {
        setTime([h, m, s - 1])
      }
    };

    const handleReset = () => {
      setTime([hr, min, sec])
      setPaused(true)
      setOver(false)
    }

    const handlePause = () => setPaused(!paused);

   const fmt = (val) => val.toString().padStart(2, '0'); 

   useEffect(() => {
    let ticker = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(ticker)
    };
   });

    return (
      <>
        <h3>{`${fmt(h)}:${fmt(m)}:${fmt(s)}`}</h3>
        <button onClick={handlePause}>{paused ? 'Start' : 'Pause'}</button>
        <button onClick={handleReset}>Reset</button>
      </>
    );
  }










function App() {
  return (
    <div className="App">
      <Timer
      hr={0}
      min={0}
      sec={5}
      />
    </div>
  );
}

export default App;
