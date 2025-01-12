import React from 'react';


export const Countries = ({ countriesToshow, toggleShow, showCountry }) => {
  
  return (
     <div className='countries'>
        {countriesToshow && countriesToshow.map((country, index) => (
           <div key={index}>
            <div>
            {country.name.common}   <button onClick={() => toggleShow(country.cca2)}>show</button> <br />
            </div>
 
              {showCountry && showCountry.cca2 === country.cca2 ? (
               <>
               <p>{country.cca2}</p>
               <h1>{country.name.common}</h1>
               <p>Capital: {country.capital}</p>
               <p>Area: {country.area}</p>
               <p><strong>languages:</strong></p>
                  <ul>
                     {(Object.keys(country.languages)).map((language, i) => (
                     <li key={i}>{language}</li>
                     ))}
                  </ul>
                  <img src={country.flags.png} alt={`Flag of ${country.flags.alt}`} width="100" />
               </>
               ) : ('')}  
           </div>
             
            
        ))}
        
     </div>
  );
};

export default Countries