import React, { useEffect, useState } from 'react';
import Axios from '../../axios/axios';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  position: relative;
  .city_list-container {
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    width: 100%;
    z-index: 10;
    background-color: white;
  }
  .city {
    cursor: pointer;
    padding: 5px;
  }
  .city:hover {
    background-color: #eee;
  }
  table {
    
    overflow-y: scroll;
  }
`

const Weather = () => {
  const currentDate = new Date();
  const currentDateString = '' + currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
  const [lists, setLists] = useState([])
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState({})
  const [weatherInfos, setWeatherInfo] = useState([]);
  const [date, setDate] = useState(currentDateString);
  const [loading, setLoading] = useState(false);

  const selectCity = (city) => {
    setLists([...[]])
    setCityName(city.title)
    setCity(city)
  }

  useEffect(() => {
    if(!city.woeid) return
    if(!date) return
    let dateType = new Date(date);
    setLoading(true)
    Axios.get(`/location/${city.woeid}/${dateType.getFullYear()}/${dateType.getMonth() + 1}/${dateType.getDate() - 1}`)
      .then(res => {
        setWeatherInfo([...res.data])
        setLoading(false)
      })
  }, [city, date])

  useEffect(() => {    
    let newArray = weatherInfos.filter(info => new Date(info.created) > new Date(date))
    setWeatherInfo([...newArray])
  }, [...weatherInfos])

  const searchCity = (city) => {
    setCityName(city)
    if(!city) return
    Axios.get(`/location/search/?query=${city}`)
      .then(res => {
        setLists([...res.data])
      })
  }

  return (
    <WeatherContainer>
      <label htmlFor="city"><b>City Name: </b></label>
      <input className="w-full" type="text" name="city" value={cityName} onChange={(e) => searchCity(e.target.value)} />
      <div className="city_list-container">
        {lists.map((list, index) => (
          <div className="city" onClick={() => selectCity(list)} key={index}>{list.title}</div>
        ))}
      </div>
      <label htmlFor="city"><b>Date: </b></label><br/>
      <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
      <div>
        <table>
          <thead>
            <tr>
              <th>Time <br />(date/hour)</th>
              <th>Status</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Air Presure</th>
              <th>Visibility</th>
              <th>Wind Direction</th>
              <th>Wind Speed</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? weatherInfos.map((info, index) => {
              return <tr key={index}>
                <td style={{width: '100px'}}>
                  {new Date(info.created).getDate()}/{new Date(info.created).getHours() + 1}:00
                </td>
                <td>{info.weather_state_name}</td>
                <td>{info.the_temp.toFixed(2)}</td>
                <td>{info.humidity}%</td>
                <td>{info.air_pressure}</td>
                <td>{info.visibility?.toFixed(2)}</td>
                <td>{info.wind_direction?.toFixed(2)}</td>
                <td>{info.wind_speed?.toFixed(2)}</td>
              </tr>
            }): <p className="text-center">loading</p>}
          </tbody>
        </table>
      </div>
    </WeatherContainer>
  )    
}

export default Weather