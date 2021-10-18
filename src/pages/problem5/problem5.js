import React from 'react';
import Problem from '../../component/problem/problem';
import Solution from '../../component/solution/solution';
import Weather from '../../component/weather/weather'

const Problem5 = () => {
  return <div className="flex">
    <Problem>
      <code>Write a small react or react native app that uses this weather api:</code> <br/>
      <code><a target="_blank" rel="noreferrer" href="https://www.metaweather.com/api">https://www.metaweather.com/api</a></code><br/>
      <code>Your app should allow the user to search for a city and see that day's forecast.</code> <br/>
      <code>Styling is not important, you can use default browser styles.</code><br/><br/>
      <div className="code">
        *Note: some people have reported that this API does not have CORS enabled on their server, 
        in this case if you are having difficulty with CORS you can launch chrome with CORS disabled: 
        <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome"
        >https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome</a> or 
        you can select a different API of your preference: 
        <a href="https://rapidapi.com/category/Weather">https://rapidapi.com/category/Weather</a>
      </div>

    </Problem>
    <Solution>
      <Weather />
    </Solution>
  </div>
}

export default Problem5;