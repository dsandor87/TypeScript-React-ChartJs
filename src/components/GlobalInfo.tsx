import styled from "@emotion/styled";

interface Props {
  newConfirmed: number;
  newDeths: number;
  newRecovered: number;
  

}

const Wrapper = styled.div`
text-align: center`


const GlobalInfo: React.FunctionComponent <Props> = ({newConfirmed, newDeths, newRecovered}) => {
  return  ( <Wrapper>
    <h1>Covid-19 data</h1>
    <h3>New Confirmed { new Intl.NumberFormat().format( newConfirmed)}</h3>
    <h3>New Deaths {new Intl.NumberFormat().format(newDeths)}</h3>
    <h3>New Recovered {new Intl.NumberFormat().format(newRecovered)}</h3>


  </Wrapper>
  )
}

export default GlobalInfo;