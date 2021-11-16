import mode1pass from '../data/rand.json'
import mode2pass from '../data/paths.json'

const verify=(mode,roll,pass)=>{
    if(mode===1){
        return mode1pass[roll]===pass
    }
    else if(mode===2){
        return mode2pass[roll]===pass
    }
    else{
        return false
    }   
}
export {verify};