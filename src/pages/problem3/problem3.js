import React from 'react';
import Problem from '../../component/problem/problem';
import Solution from '../../component/solution/solution';

const Problem3 = () => {
  return <div className="flex">
    <Problem>
      <code>{"Let's say you have a file with a following structure:"}</code> <br /><br />
      <code>&emsp;&emsp;{'"id,name,value'}</code><br />
      <code>&emsp;&emsp;{"1,Dan,150"}</code><br />
      <code>&emsp;&emsp;{"2,Peter,300"}</code><br />
      <code>&emsp;&emsp;{"3,Mark,400"}</code><br />
      <code>&emsp;&emsp;{'4,Victor,600"'}</code><br /><br />
      <code>Write a function in node.js that reads this file and returns the number, which is a sum of all "value" numbers from the file;</code>

    </Problem>
    <Solution>
      <div className="code">
        <code>{"const readFile = async () => {"}</code><br />
        <code>&emsp;&emsp;{'var fs = require("fs");'}</code><br />
        <code>&emsp;&emsp;{'var parse = require("csv-parse");'}</code><br />
        <code>&emsp;&emsp;{'let result = 0;'}</code><br />
        <code>&emsp;&emsp;{'return new Promise((resolve, reject) => {'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;{'fs.createReadStream("file.csv")'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'.pipe(parse({ delimiter: "," }))'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'.on("data", function (row) {'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'let lastOne = csvrow[row.length - 1];'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'if (!isNaN(lastOne)) result += Number(lastOne);'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'})'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'.on("end", function () {'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'resolve(result);'}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'});'}</code><br />
        <code>&emsp;&emsp;{'});'}</code><br />
        <code>{'};'}</code><br /><br />
        <code>{'async function run() {'}</code><br />
        <code>&emsp;&emsp;{'let result = await readFile();'}</code><br />
        <code>&emsp;&emsp;{'console.log(result)'}</code><br />
        <code>{'}'}</code><br />
      </div>
    </Solution>

  </div>
}

export default Problem3;