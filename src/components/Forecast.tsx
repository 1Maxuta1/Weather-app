import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from '../helpers'
import { forecastType } from '../types'
import Sunrise from './Icons/Sunrise'
import Sunset from './Icons/Sunset'
import Tile from './Icons/Tile'

type Props = {
  data: forecastType
}
const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
)
const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]
  return (
    <div className="bg-black bg-opacity-25 backdrop:blur-lg rounded drop-shadow-lg w-full md:max-w-[500px] h-full lg:max-h-[500px] pr-4 pl-4">
      <section className="text-center">
        <h2 className="text-[45px] mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {data.name}, <span></span>
          {data.country}
        </h2>
        <h1 className="flex justify-center text-2xl text-white font-bold text-[45px] ">
          <Degree temp={Math.round(today.main.temp)} />
        </h1>
        <p className="text-2xl flex justify-around">
          {today.weather[0].main}
          <span> </span>
          {today.weather[0].description}
        </p>
        <p className=" flex justify-around">
          H: {Math.ceil(today.main.temp_max)}
          <span> </span>
          L: {Math.floor(today.main.temp_min)}
        </p>
      </section>
      <section className="flex overflow-x-scroll mt-8 pb-2 mb-5 bg-white bg-opacity-25 rounded-lg ">
        {data.list.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[70px] inline-block text-center"
          >
            <p className="text-sm">
              {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
            </p>
            <img
              className=" "
              alt={`weather-icon-${item.weather[0].description}`}
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            />
            <Degree temp={Math.round(item.main.temp)} />
          </div>
        ))}
      </section>

      <section className="flex flex-wrap justify-between">
        <div className="rounded-md mr-4 ml-4 w-[140px] text-xs font-bold flex flex-col items-center drop-shadow-lg py-4 mb-5 bg-white bg-opacity-25 backdrop:blur-lg">
          {/* Sunrise */}
          <h1 className="pb-2">Sunrise</h1>
          <Sunrise />
          <span className="mt-2 ">{getSunTime(data.sunrise)}</span>
        </div>
        <div className="rounded-md mr-4 ml-4 w-[140px] text-xs font-bold flex flex-col items-center drop-shadow-lg py-4 mb-5 bg-white bg-opacity-25 backdrop:blur-lg">
          {/* Sunset */}
          <h1 className="pb-2">Sunset</h1>
          <Sunset />
          <span className="mt-2 ">{getSunTime(data.sunset)}</span>
        </div>
        {/* Wind */}
        <Tile
          icon="wind"
          title="Wind"
          info={`${Math.round(today.wind.speed)} km/h`}
          description={`${getWindDirection(
            Math.round(today.wind.deg)
          )}, gusts ${today.wind.gust.toFixed(1)} km/h`}
        />
        {/* Feels like */}
        <Tile
          icon="feels"
          title="Feels"
          info={<Degree temp={Math.round(today.main.feels_like)} />}
          description={`Feels ${
            Math.round(today.main.feels_like) < Math.round(today.main.temp)
              ? 'Cold'
              : 'Warm'
          } `}
        />
        {/* Pressure */}
        <Tile
          icon="pressure"
          title="Pressure"
          info={`${today.main.pressure} hPa`}
          description={`${
            Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
          } than standard`}
        />
        {/* Humidity */}
        <Tile
          icon="humidity"
          title="Humidity"
          info={`${Math.round(today.main.humidity)} km/h`}
          description={`${getHumidityValue(
            Math.round(today.main.humidity)
          )}, gusts ${today.main.humidity.toFixed(1)}`}
        />
        <Tile
          icon="pop"
          title="Precipitation"
          info={`${Math.round(today.pop)} %`}
          description={`${getPop(today.pop)} clouds at ${today.clouds.all}%`}
        />
        <Tile
          icon="visibility"
          title="Visibility"
          info={`${(today.visibility / 1000).toFixed()} km`}
          description={getVisibilityValue(today.visibility)}
        />
      </section>
    </div>
  )
}

export default Forecast
