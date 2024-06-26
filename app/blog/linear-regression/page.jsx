"use client";

import React, { useEffect, useState } from "react";
import fitLinearRegression from "@/utils/linearRegression";
import Select from "@/components/Select";
import Button from "@/components/Button";
import LinearRegressionChart from "@/components/LinearRegressionChart";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import lines from "@/public/lines.png";
import linerloss from "@/public/linearloss.png";
import convex from "@/public/convex.png";

const trainingData = [
  [1.0, 6.329212172649187],
  [1.0909090909090908, 4.411784729813332],
  [1.1818181818181819, 5.047356004014934],
  [1.2727272727272727, 4.554644158813584],
  [1.3636363636363638, 4.656456471652488],
  [1.4545454545454546, 4.470377629256106],
  [1.5454545454545454, 6.655325942428725],
  [1.6363636363636362, 6.56844916034961],
  [1.7272727272727273, 4.82814122123477],
  [1.8181818181818183, 6.855928835111713],
  [1.9090909090909092, 7.496986617206882],
  [2.0, 8.889272731415282],
  [2.090909090909091, 8.143356580496498],
  [2.1818181818181817, 7.467647559320103],
  [2.2727272727272725, 7.064289228173542],
  [2.3636363636363638, 8.577501258500972],
  [2.4545454545454546, 9.36251557549699],
  [2.5454545454545454, 9.1486465264902],
  [2.6363636363636367, 8.438288879885546],
  [2.7272727272727275, 8.969563832585116],
  [2.8181818181818183, 7.29942795058073],
  [2.909090909090909, 9.381042954889363],
  [3.0, 10.39285482506846],
  [3.090909090909091, 9.118490198367576],
  [3.1818181818181817, 9.485304725170922],
  [3.272727272727273, 10.75305708365365],
  [3.3636363636363638, 9.72523251236245],
  [3.4545454545454546, 11.536886653573063],
  [3.5454545454545454, 10.44540187663133],
  [3.6363636363636362, 11.310254905453608],
  [3.7272727272727275, 10.068861941777508],
  [3.8181818181818183, 11.156181637147956],
  [3.909090909090909, 12.504764705633422],
  [4.0, 9.674036854237256],
  [4.090909090909091, 12.610801882029145],
  [4.181818181818182, 9.274282086166995],
  [4.272727272727273, 11.415634608022248],
  [4.363636363636363, 12.358795676637058],
  [4.454545454545455, 11.322552844795922],
  [4.545454545454545, 12.381629171886772],
  [4.636363636363637, 13.536830638299213],
  [4.7272727272727275, 12.744580236422832],
  [4.818181818181818, 10.666075139027024],
  [4.909090909090909, 13.622087707121848],
  [5.0, 14.030550333953391],
  [5.090909090909091, 13.299916117581338],
  [5.181818181818182, 13.341783036303047],
  [5.2727272727272725, 13.592295259317353],
  [5.363636363636363, 12.09851986814667],
  [5.454545454545455, 13.516730318607657],
  [5.545454545454546, 15.79188179632831],
  [5.636363636363637, 15.334057027962054],
  [5.7272727272727275, 15.15034902844095],
  [5.818181818181818, 14.20037506611949],
  [5.909090909090909, 14.485240197880183],
  [6.0, 15.602134563358453],
  [6.090909090909091, 15.290607140733014],
  [6.181818181818182, 15.400403292262077],
  [6.2727272727272725, 15.006491138858863],
  [6.363636363636364, 16.226450614599003],
  [6.454545454545455, 15.197139152133712],
  [6.545454545454546, 15.853908121631973],
  [6.636363636363637, 17.12984650798458],
  [6.7272727272727275, 14.572193558048635],
  [6.818181818181818, 17.05706872255416],
  [6.909090909090909, 15.749006481354133],
  [7.0, 14.423141199728422],
  [7.090909090909091, 15.956894740000354],
  [7.181818181818182, 16.206884503776298],
  [7.2727272727272725, 18.47675881633075],
  [7.363636363636364, 18.71152987514394],
  [7.454545454545455, 20.13525027913431],
  [7.545454545454546, 17.672405175933964],
  [7.636363636363637, 17.9389495999585],
  [7.7272727272727275, 18.307118585602637],
  [7.818181818181818, 20.197671307726292],
  [7.909090909090909, 19.502891814528983],
  [8.0, 19.029462365129888],
  [8.09090909090909, 18.329343261424917],
  [8.181818181818182, 21.345053529870757],
  [8.272727272727273, 17.91525591407673],
  [8.363636363636363, 19.492238403110303],
  [8.454545454545455, 19.745019648230382],
  [8.545454545454547, 20.749388704063307],
  [8.636363636363637, 18.96483515410063],
  [8.727272727272727, 21.808330493293923],
  [8.818181818181818, 20.507840985331878],
  [8.90909090909091, 19.844902629282444],
  [9.0, 20.30555121624928],
  [9.090909090909092, 21.132976714465276],
  [9.181818181818182, 20.78402810295627],
  [9.272727272727273, 22.41656065908884],
  [9.363636363636363, 20.75695246762429],
  [9.454545454545455, 22.332450350974042],
  [9.545454545454545, 24.065153592831287],
  [9.636363636363637, 22.579147650661774],
  [9.727272727272727, 23.45380738621901],
  [9.818181818181818, 23.508699734802704],
  [9.90909090909091, 20.950201523174098],
  [10.0, 24.23074408964995],
];

const learningRates = [0.001, 0.002, 0.003, 0.004, 0.005, 0.006, 0.007];

const epochs = [
  50, 100, 200, 400, 600, 800, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000,
];

const w = 1;
const b = 14;

const postPart1 = `
In linear regression, we aim to find a linear relationship between a dependent variable (y) and an independent variable (x). Linear regression assumes that the relationship is linear, meaning that a line can represent the data. The equation of a line is given by:
$$
y = m*x + b
$$
where $y$ represents the dependent variable, $x$ represents the independent variable, $m$ represents the slope (or angle with the horizontal axis), and $b$ represents the intercept (or the point where the line intersects the vertical axis). If the value of $b=0$, the line will pass through the origin. See the following figure to understand better.
`;

const postPart2 = `So, by varying the values of $m$ and $b$, we can get our desired line that will fit the data point better. The question is, how can we find the optimal value of $m$ and $b$ that will fit our data point? One possible way is to try all possible values of $m$ and $b$. However, this approach is not feasible. It may take a lot of time to find the optimal values. Instead, we can formulate the problem from another angle. We initially randomly take two values of $m$ and $b$. Then calculate the difference between the data points and the value given by the function $y = m*x+c$. Our aim is to minimize the loss. How can we minimize the loss? Before minimizing the loss, we first need to define the loss function. One simple loss function can be used to find the absolute difference between the data points and the value given by the function and sum them up. Mathematically, the loss function can be expressed by the following equation:
$$
error = \\frac{1}{n}\\sum_{i=1}^n|y_i - (m*x_i+c)|
$$
Where $y_i$ is the actual value from the data. But here is a problem. The function is a linear function. One way to visualize the function is by putting a range of values in $|y_i - (m*x_i+c)|$ this part. Replace $y_i - (m*x_i+c)$ by $v$. Now put some values, say from $-10$ to $10$. The output of the function will range from $0$ to $10$. The function plot will look like this: 
`;

const postPart3 = `The problem with this linear function is that it is not differentiable. If we differentiate $y=|x|$ with respect to $x$:
$$
\\implies{\\frac{d_y}{d_x}=\\frac{d}{d_x}x}
$$
$$
\\implies{\\frac{d_y}{d_x}=1}
$$
We will always get $1$, which is a constant. There is a [*wonderful tutorial*](https://youtu.be/9vKqVkMQHKk?si=nD1Ki0281QC0Dyyz) on derivatives worth checking. We need the error/loss function, which is non-leaner, meaning something like convex. An example of a convex function is $y=x^2$. The plot of this function will look like this:
`;

const postPart4 = `Now, if we differentiate the function with respect to $x$:
$$
\\implies{\\frac{d_y}{d_x}=\\frac{d}{d_x}x^2}
$$
$$
\\implies{\\frac{d_y}{d_x}=2x}
$$
We get $2x$, which definitely is not a constant like before. Since our target is to minimize the loss, we can use this convex function. In simple terms, derivative means slope, which can be written as:
$$
m=\\frac{\\Delta{y}}{\\Delta{x}}
$$
If we see figure 3 above, the slope is $0$ where $x=0$ according to the curve, which is also the lowest point. Since the derivative of $y=x^2$ is not constant, we can use the derivative of this function to find the minimum value. So, instead of using just absolute error, we can redefine our loss function something like this:
$$
mse = \\frac{1}{n}\\sum_{i=1}^n(y_i - (m*x_i+c))^2
$$
This function is called mean squared error (MSE). So far, we have found out how we can calculate the loss/error and how we can find the minimum point of this function using the derivative. Remember, to fit the line to our data points, we can change the values of $m$ and $b$. Using the loss function, we need to somehow find out the optimal values of those two variables so that we do not need to iterate over all possible values of $m$ and $b$. 
`;

const setInitialLine = () => {
  return trainingData.map((sample) => {
    return {
      x: sample[0],
      y: sample[1],
      lineY: w * sample[0] + b,
    };
  });
};

const Blog = () => {
  const [learningRate, setLearningRate] = useState(learningRates[0]);
  const [epoch, setEpoch] = useState(epochs[0]);
  const [fittingLine, setFittingLine] = useState(false);

  const [data, setData] = useState(setInitialLine());

  const resetLine = () => {
    setData(setInitialLine());
  };

  useEffect(() => {
    if (fittingLine) {
      const result = fitLinearRegression(
        trainingData,
        w,
        b,
        learningRate,
        epoch
      );
      setData(
        trainingData.map((sample) => {
          return {
            x: sample[0],
            y: sample[1],
            lineY: result.weight * sample[0] + result.bias,
          };
        })
      );
      setFittingLine(false);
      // setMSEError(
      //   result.mseErrors.map((error, index) => ({ x: index + 1, y: error }))
      // );
    }
  }, [learningRate, epoch, fittingLine]);

  return (
    <div className="w-full mt-2">
      <div>
        <p className="font-bold text-3xl text-gray-500 text-center">
          Linear Regression
        </p>
      </div>
      <div className="mt-2 text-lg">
        <Markdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        >
          {postPart1}
        </Markdown>
        <div>
          <Image
            src={lines}
            className="w-full h-full"
            alt="lines"
            priority
            quality={100}
          />
        </div>
        <Markdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        >
          {postPart2}
        </Markdown>
        <div>
          <Image
            src={linerloss}
            className="w-full h-full"
            alt="linear loss function"
            priority
            quality={100}
          />
        </div>
        <Markdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        >
          {postPart3}
        </Markdown>
        <div>
          <Image
            src={convex}
            className="w-full h-full"
            alt="convex function"
            priority
            quality={100}
          />
        </div>
        <Markdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        >
          {postPart4}
        </Markdown>
      </div>
      <div className="mt-1">
        <p className="text-gray-400 text-lg font-semibold text-center">
          Set hyper-parameters
        </p>
        <div className="flex justify-center flex-col mt-2 md:flex-row">
          <div className="flex justify-center gap-x-4">
            <div className="text-center w-[110px]">
              <label className="text-gray-500">Learning Rate</label>
              <Select
                className="mt-1 w-full"
                options={learningRates}
                selected={learningRate}
                setSelected={setLearningRate}
              />
            </div>
            <div className="text-center w-[110px]">
              <label className="text-gray-500">Epoch</label>
              <Select
                className="mt-1 w-full"
                options={epochs}
                selected={epoch}
                setSelected={setEpoch}
              />
            </div>
          </div>
          <div className="ml-5 flex justify-center mt-4 gap-x-4 md:self-end md:gap-x-2">
            <Button
              btnText="Fit Line"
              className="rounded-md py-[6px]"
              loading={fittingLine}
              loadingText="Fit Line"
              onClick={() => setFittingLine(true)}
            />
            <Button
              btnText="Reset Line"
              className="rounded-md py-[6px]"
              onClick={() => resetLine()}
            />
          </div>
        </div>
      </div>
      <div>
        <LinearRegressionChart data={data} />
      </div>
    </div>
  );
};

export default Blog;
