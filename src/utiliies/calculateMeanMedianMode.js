export const calculateMean=(values) =>values.reduce((sum,val)=>sum+val,0)/values.length;

export const calculateMedian=(values)=>{
    let sortedval=values.toSorted();
    let med=Math.floor(sortedval.length/2);
    if(values.length%2===0){
        med=(sortedval[med-1]+sortedval[med])*.5;
    }else{
        med=sortedval[med];
    }
    return med;
}

 export const calculateMode=(values)=> {

    let mode;
    //calculating frequency
    const frequencyMap = {};
    values.forEach((value) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    let maxFrequency = 0;
    // find max frequency number
    for (let value in frequencyMap) {
        if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        mode=value;
        }
    }

return mode !== undefined ? mode: 0;
}
