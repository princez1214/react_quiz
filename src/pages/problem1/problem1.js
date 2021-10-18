import React from 'react';
import Problem from '../../component/problem/problem';
import Solution from '../../component/solution/solution';

const Problem1 = () => {
  return <div className="flex">
    <Problem>
      <p><b>Problem</b></p>
      <code>Write a react function that takes the following input: </code>
      <div className="code">
        <p>rooms = [</p>
        <p>&emsp;&emsp;{'{ room_type: "Queen", vacant_rooms: 5, price: 100 },'} </p>
        <p>&emsp;&emsp;{'{ room_type: "Double", vacant_rooms: 3, price: 75 },'}</p>
        <p>&emsp;&emsp;{'{ room_type: "Twin", vacant_rooms: 8, price: 60 }'}</p>
        <p>];</p>
      </div>
      <code>And produces the following output:</code>
      <br />
      <code>{'<ol><li>Queen, 5, $100</li><li>Double, 3, $75</li><li>Twin, 8, $60</li></ol>'}</code>
    </Problem>
    <Solution>
      <p><b>Solution</b></p>
      <div className="code">
        <p>{"function Rooms({ rooms }) {"}</p>
        <p>&emsp;&emsp;{"return <ol>"}</p>
        <p>&emsp;&emsp;&emsp;&emsp;{"{rooms.map((room, index) => "}</p>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<li key={index}>"}</p>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"{room.room_type}, {room.vacant_rooms}, ${room.price}"}</p>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"</li>"}</p>
        <p>&emsp;&emsp;&emsp;&emsp;{"}"}</p>
        <p>&emsp;&emsp;{"</ol>"}</p>
        <p>{"}"}</p>
      </div>
    </Solution>
  </div>
}

export default Problem1;