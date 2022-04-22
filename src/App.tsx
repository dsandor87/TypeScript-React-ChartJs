import { Global, css } from "@emotion/react";
import { useEffect, useState } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
import CountryList from "./components/CoutryList";
import GlobalInfo from "./components/GlobalInfo";
import { ResponseData } from "./types";





const App:React.FunctionComponent = () =>{

  const [data, setData] = useState<ResponseData | undefined>(undefined)

  const fetchData = async() => {
    const result = await fetch('https://api.covid19api.com/summary')
    const data: ResponseData = await result.json()

    setData(data)
    console.log(data)
  }

  useEffect(()=>{
    fetchData()
  },[])




  return (
    <div>

      <Global styles={css`
      body {
        background-color: #eeeeee;
      }`}/>
      
      {
    data? (
      <>
<GlobalInfo newConfirmed={data?.Global.NewConfirmed} newDeths={data?.Global.NewDeaths}newRecovered={data?.Global.NewRecovered}/>
<CountryList countries={data?.Countries}/>
</>
) :('Loading...')
}
    </div>
  );
}


export default App;
