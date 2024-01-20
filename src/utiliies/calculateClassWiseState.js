import { dataset } from "./datasets";

export function calculateClassWiseState(props){

    const stats={}
    dataset.forEach((entry)=>{
        const className=`Class${entry.Alcohol}`;
        if(!stats[className]){
            stats[className]=[]
        }
        stats[className].push(entry[props]);
    });
    return stats;
}
