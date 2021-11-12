import './App.css';
import Report from './Report';
import data from './text.json';
import Codes from './components/Codes';

function App() {
    var roll=new URLSearchParams(window.location.search).get("roll");
    console.log(roll);
    if(roll==null){
        return (
            <div className="App">    
                <Codes/>
            </div>
        )
    }
    roll=roll.toUpperCase()
    return (
        <div className="App">
            <Report
                name={data.details[roll] &&data.details[roll].name}
                cgpa={data.details[roll]&&data.details[roll].cgpa}
                src={"DATA/"+roll+".jpeg"}
            >
            </Report>
        </div>
    );
}

export default App;
