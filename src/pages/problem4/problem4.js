import React from 'react';
import Problem from '../../component/problem/problem';
import Solution from '../../component/solution/solution';

const Problem4 = () => {
  return <div className="flex">
    <Problem>
      <p><b>Problem</b></p><br />
      <code>Refactor the code below. (do not create functions or constants, code refactor is required only)</code> <br />
      <div className="code">
        <code>{"if (province == 'ONTARIO') {"}</code><br />
        <code>&emsp;&emsp;{"rate = ONTARIO_RATE;"}</code><br />
        <code>&emsp;&emsp;{"amt = base * ONTARIO_RATE;"}</code><br />
        <code>&emsp;&emsp;{"calc = 2 * basis(amt) + extra(amt) * 1.05;"}</code><br />
        <code>{"} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {"}</code><br />
        <code>&emsp;&emsp;{"rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;"}</code><br />
        <code>&emsp;&emsp;{"amt = base * rate;"}</code><br />
        <code>&emsp;&emsp;{"calc = 2 * basis(amt) + extra(amt) * 1.05;"}</code><br />
        <code>&emsp;&emsp;{"if (province == 'QUEBEC') {"}</code><br />
        <code>&emsp;&emsp;&emsp;&emsp;{"points = 2;"}</code><br />
        <code>&emsp;&emsp;{"}"}</code><br />
        <code>{"} else {"}</code><br />
        <code>&emsp;&emsp;{"rate = 1;"}</code><br />
        <code>&emsp;&emsp;{"amt = base;"}</code><br />
        <code>&emsp;&emsp;{"calc = 2 * basis(amt) + extra(amt) * 1.05;"}</code><br />
        <code>{"}"}</code><br />
      </div>
    </Problem>
    <Solution>
      <p><b>Solution</b></p><br />
      <div className="code">
        <code>{"if (province == 'ONTARIO') {"}</code> <br/>
        <code>&emsp;&emsp;{"rate = ONTARIO_RATE;"}</code><br/>
        <code>{"} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {"}</code><br/>
        <code>&emsp;&emsp;{"rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;"}</code><br/>
        <code>&emsp;&emsp;{"if (province == 'QUEBEC') points = 2;"}</code><br/>
        <code>{"} else {"}</code><br/>
        <code>&emsp;&emsp;{"rate = 1;"}</code><br/>
        <code>{"}"}</code><br/><br/>
        <code>{"amt = base * rate;"}</code><br/>
        <code>{"calc = 2 * basis(amt) + extra(amt) * 1.05;"}</code><br/>
      </div>
    </Solution>
  </div>
}

export default Problem4;