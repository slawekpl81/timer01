import './styles.css';
import Timer from "./components/Timer";
import {useState} from "react";

function App() {
    const [red, setRed]=useState(false);
    return (
        <div className="wrapper">
            <div className={red ? 'ring ending' : 'ring'}>
                <svg width="518" height="518" viewBox="0 0 518 518">
                    <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254"/>
                </svg>
            </div>
            <Timer setRed={setRed}/>
        </div>
    );
}

export default App;
