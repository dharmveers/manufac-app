export const calculateGamma = (dataset) => {
     const gammaValues = dataset.map(point => (point.Ash * point.Hue) / point.Magnesium);

    //mean
    const calculateMean=(values) =>{
        let sum=0;
        values.forEach(element => {
            sum+=element;
        });
        return (sum/values.length);
    }

    //median
    const calculateMedian=(values)=>{
        let sortedval=values.toSorted();
        let med=Math.floor(sortedval.length/2);
        if(values.length%2===0){
          med=(sortedval[med-1]+sortedval[med])*.5;
        }else{
            med=sortedval[med];
        }
        return med.toFixed(3);
    }
        // Function to calculate the mode of an array
        const calculateMode = (arr) => {
            const countMap = new Map();
            arr.forEach(item => countMap.set(item, (countMap.get(item) || 0) + 1));
        
            let maxFrequency = 0;
            let modeValue;
        
            countMap.forEach((frequency, value) => {
              if (frequency > maxFrequency) {
                maxFrequency = frequency;
                modeValue = value;
              }
            });
        
            return modeValue!==undefined?modeValue:0;
          };

    const classWiseData = {};
    dataset.forEach(point => {
      const className = point.Class;
  
      if (!classWiseData[className]) {
        classWiseData[className] = {
          gammaValues: [],
        };
      }
      classWiseData[className].push(gammaValues);
    });
  
    const result = {};
  
    Object.entries(classWiseData).forEach(([className, data]) => {
      const { gammaValues } = data;
        //mean
        const mean=calculateMean(gammaValues);
        //median
        const sortedValues = gammaValues.toSorted();
        const median=calculateMedian(sortedValues)
        //mode  
        const mode = calculateMode(gammaValues);
  
      result[className] = {
        Mean: mean.toFixed(3),
        Median: median,
        Mode: mode.toFixed(3),
      };
    });
  
    return result;
  };