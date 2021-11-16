import './App.css';
import Report from './components/Report';
import data from './data/text.json';
import Codes from './components/Codes';
import Scan from './components/Scan';
import SecureReport from './components/SecureReport';
 
function App() {
    var roll=new URLSearchParams(window.location.search).get("roll");
    const path=window.location.pathname.substr(1);
    if(path==="scan"){
        return (
            <div className="App">    
                <Scan/>
            </div>
        )
    }
    if(path==="1"||path==="2"){
        return (
            <div className="App">    
                <SecureReport mode={path==="1"?1:2}/>
            </div>
        )
    }
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
