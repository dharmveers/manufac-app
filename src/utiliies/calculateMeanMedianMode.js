export const calculateMean=(values) =>{
    let sum=0;
    let len=0;
    values.forEach(element => {
        sum+=element;
        len++;
    });
    return (sum/len).toFixed(3);
}
export const calculateMedian=(values)=>{
    let sortedval=values.toSorted();
    let len=sortedval.length;
    let med=0;
    if(len===1){
        med=values[0];
        return med.toFixed(3);
    }
    else if(len%2===0){
        med=(sortedval[(len/2)-1]+sortedval[len/2])*.5;
    }else{
        med=sortedval[len/2];
    }
    return med.toFixed(3);
}

 export const calculateMode=(values)=> {

    let mode=0;
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
        mode = value;
        }
    }

return mode;
}
