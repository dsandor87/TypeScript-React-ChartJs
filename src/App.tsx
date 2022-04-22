import { Global, css } from "@emotion/react";
import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import CountryList from "./components/CoutryList";
import GlobalInfo from "./components/GlobalInfo";
import { ResponseData, Country } from "./types";





const App:React.FunctionComponent = () =>{

  const [data, setData] = useState<ResponseData | undefined>(undefined)
  const [activeCountries, setActiveCountries] =useState<Country[]>([])
  

  const fetchData = async() => {
    const result = await fetch('https://api.covid19api.com/summary')
    const data: ResponseData = await result.json()

    setData(data)
    console.log(data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  const onCountryClick = (country:Country) => {

    const countryIndex = activeCountries.findIndex(activeCountry => activeCountry.ID === country.ID)

    if(countryIndex > -1) {
      const newActiveCountries = [...activeCountries];
      newActiveCountries.splice(countryIndex,1)

      setActiveCountries( newActiveCountries)

    }
    else{
      setActiveCountries([ ...activeCountries, country ])

    }



  }



  return (
    <div>

      <Global styles={css`
      body {
        background-color: #eeeeee;
      }`
      }/>


      
      {
    
    data? (
      <>
<GlobalInfo newConfirmed={data?.Global.NewConfirmed} newDeths={data?.Global.NewDeaths}newRecovered={data?.Global.NewRecovered}/>
<hr/>
{activeCountries.length ? <BarChart countries={activeCountries}/>: null}

<CountryList countries={data?.Countries} onItemClick={onCountryClick}/>
</>
) :('Loading...')
}
    </div>
  );
}


export default App;
