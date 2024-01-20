export const calculateGamma = (dataset) => {
    const gammaValues = dataset.map(point => (point.Ash * point.Hue) / point.Magnesium);

    //mean
    const calculateMean=(values) =>{
        let sum=0;
        let len=0;
        values.forEach(element => {
            sum+=element;
            len++;
        });
        return (sum/len);
    }

    //median
    const calculateMedian=(values)=>{
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
        return med;
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
        
            return modeValue;
          };

    const classWiseData = {};
    dataset.forEach(point => {
      const className = point.Class;
  
      if (!classWiseData[className]) {
        classWiseData[className] = {
          gammaValues: [],
        };
      }
  
      classWiseData[className].gammaValues.push((point.Ash * point.Hue) / point.Magnesium);
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