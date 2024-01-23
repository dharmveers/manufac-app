import { dataset } from "./datasets";

export function calculateClassWiseState(){

    const stats={}
    dataset.forEach((entry)=>{
        const alcoClass=`Class ${entry.Alcohol}`;
        if(!stats[alcoClass]){
            stats[alcoClass]=[]
        }
        stats[alcoClass].push(entry.Flavanoids);
    });
    return stats;
}