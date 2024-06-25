const fitLinearRegression = (trainingData, w, b, lr, epoch) => {
  const sampleSize = trainingData.length;
  let errors = [];

  for (let i = 0; i < epoch; i++) {
    let totalError = 0;
    let wGrad = 0;
    let bGrad = 0;

    for (let j = 0; j < sampleSize; j++) {
      let yPred = w * trainingData[j][0] + b;

      totalError += (trainingData[j][0] - yPred) * (trainingData[j][0] - yPred);

      // calculating gradient
      wGrad +=
        -(2.0 / sampleSize) * trainingData[j][0] * (trainingData[j][1] - yPred);
      bGrad += -(2.0 / sampleSize) * (trainingData[j][1] - yPred);
    }
    // updating weight and bias
    w -= lr * wGrad;
    b -= lr * bGrad;

    // calculating Mean Squared Error
    let mseError = totalError / sampleSize;
    errors.push(mseError);
  }
  return { weight: w, bias: b, mseErrors: errors };
};

export default fitLinearRegression;
