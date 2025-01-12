import { useEffect, useState } from "react"
import countryService from './service/countries'
import Countries from "./Countries"
import Notification from "./Notification"

//define filter component
export const Filter = ({filter, onChange}) => {
  return (
    <div>
      find countries <input type="text" value={filter} onChange={onChange} />
    </div>
  )
}

// define weather component
export const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countryService
    .getCountryWeather(capital)
      .then(response => {
        console.log(response.data)
        setWeather(response.data.current);
      });
  }, [capital]);

  //error handling
  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature {weather.temperature}°C</p>
      <img src={weather.weather_icons[0]} alt="weather icon" />
      <p><strong>Wind:</strong> {weather.wind_speed} km/h direction {weather.wind_dir}</p>
    </div>
  );
};



function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])
  const [showCountry, setShowCountry] = useState(null)


  useEffect(() => {
    console.log('rendering effect...')
    countryService
    .getAll()
    .then(response => {
      console.log('Promised fulfilled')
      setCountries(response.data)
    })


  }, [])
  // console.log('render', countries?.length || 0, 'countries')

  const handleFilterChange = (e) => {
    const newFilter = e.target.value
    
    setFilter(newFilter)
    const filteredCountries = countries.filter(countrie => countrie.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    console.log(filteredCountries)
    if(filteredCountries.length > 10){
      setMessage('Too many matches, specify another filter')
      setCountriesToShow([])
    } else {
      setMessage('')
      setCountriesToShow(filteredCountries)
    }
  }

  const toggleToShow = (cca2) => {
    const country = countries.find(n => n.cca2 === cca2)
    console.log('Country before ...', country)
    const newCountry = { ...country }
    console.log('Country mutated after ...', newCountry)
    setCountries(countries.map(c => c.cca2 === cca2 ? newCountry : c))
    setShowCountry(newCountry)
  }


  return (
   <div>
    <Filter onChange={handleFilterChange} filter={filter} />
    <Notification message={message}/>
    
    {countriesToShow?.length === 1 ? (
      countriesToShow.map((countrie, i) => (
        <div key={i}>
          <p>{countrie.cca2}</p>
          <h1>{countrie.name.common}</h1>
          <p>Capital: {countrie.capital}</p>
          <p>Area: {countrie.area}</p>
          <p><strong>languages:</strong></p>
          <ul>
            {Object.values(countrie.languages).map((language, i) => (
              <li key={i}>{language}</li>
            ))}
          </ul>
          <img src={countrie.flags.png} alt={`Flag of ${countrie.flags.alt}`} width="100" />
          <Weather capital={countrie.capital}/>
        </div>
      ))
    ) : (
      <Countries countriesToshow={countriesToShow} toggleShow={toggleToShow} showCountry={showCountry}/>
    )}
    
   </div>
  )
}

export default App


