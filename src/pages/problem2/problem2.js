import React from 'react';
import Problem from '../../component/problem/problem';
import Solution from '../../component/solution/solution';

const Problem2 = () => {
  return <div className="flex">
    <Problem>
      <code>Write a function in Javascript, which receives NUMBER and has the next logic:</code><br /><br />
      <code>&emsp;&emsp;a) it prints "foo" if NUMBER is divisible by 2</code><br />
      <code>&emsp;&emsp;b) it prints "bar" if NUMBER is divisible by 7;</code><br />
      <code>&emsp;&emsp;c) it prints "foobar" if NUMBER is divisible by 14;</code><br />
      <code>&emsp;&emsp;d) it prints NUMBER value for other cases;</code><br /><br />
      <p className="code">note: NUMBER is a positive integer number;</p><br />
    </Problem>
    <Solution>
      <div className="code">
        <p>{"function func(number) {"}</p>
        <p>&emsp;&emsp;{"if(number % 14 === 0 || number % 7 === 0 || number % 2 === 0) {"}</p>
        <p>&emsp;&emsp;&emsp;&emsp;{"if(number % 14 === 0) console.log('foobar')"}</p>
        <p>&emsp;&emsp;&emsp;&emsp;{"if(number % 7 === 0) console.log('bar')"}</p>
        <p>&emsp;&emsp;&emsp;&emsp;{"if(number % 2 === 0) console.log('foo')"}</p>
        <p>&emsp;&emsp;{"}"}</p>
        <p>&emsp;&emsp;{"else {"}</p>
        <p>&emsp;&emsp;&emsp;&emsp;{"console.log(number)"}</p>
        <p>&emsp;&emsp;{"}"}</p>
        <p>{"}"}</p>
      </div>
    </Solution>
  </div>
}

export default Problem2;