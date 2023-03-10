import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const  App = () =>{
const[state,setState] = useState([])
const[query,setQuery] = useState("")





  useEffect(()=>{

    axios.get('https://script.google.com/macros/s/AKfycbxxWdd-PNyOmzRYDSZ1h2Rna56UoRGPd8P7ullAyTyJaAMH8hTptnuIqvlqphLYSEQ/exec').then((res)=>{
      setState(res.data)
    }).catch((err)=>{
      console.log(err);
    })


  },[state])



  const filetered = state.filter(item =>{
     return item['Experiment Name'].toLowerCase().includes(query.toLowerCase())
  })



  return (
    <div className="App">
      <div className="input-group mb-3">
  <input type="text" className="form-control" value={query} onChange={e=> setQuery(e.target.value)} placeholder="Enter Text" aria-label="Enter Text" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2">SEARCH</span>
  </div>
</div>
<table className="table">  
  <thead className="thead-dark">
    <tr>
    <th scope="col">Merchant Name</th>
      <th scope="col">Merchant Domain</th>
      <th scope="col">Button Variant</th>
      <th scope="col">Discount Text</th>
      <th scope="col">Variant Percentage</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
  {!filetered? '': filetered.map((data)=>(
    <tr>
      <td>{data['Experiment Name']}</td>
      <td>{data['Merchant store URL']}</td>
      <td>
       Variant 1:  {data['Variant1: CTA']|| 'NA'}   <br/>
       Variant 2:  {data['Variant2: CTA']|| 'NA'}   <br/>
       Variant 3:  {data['Variant3: CTA']|| 'NA'}   <br/>
       Variant 4:  {data['Variant4: CTA']|| 'NA'}   <br/>
      </td>
      <td>
       Variant 1:  {data['Variant1: What\'s the discount applicable? (x% upto INR y)'] || "NA"}   <br/>
       Variant 2:  {data['Variant2: What\'s the discount applicable? (x% upto INR y)'] || "NA" }   <br/>
       Variant 3:  {data['Variant3: What\'s the discount applicable? (x% upto INR y)'] || "NA"}   <br/>
       Variant 4:  {data['Variant4: What\'s the discount applicable? (x% upto INR y)'] || "NA"}   <br/>
      </td>
      <td>
      Variant 1:  {data['Variant1: rollout percentage']  || "0"}   <br/>
      Variant 2:  {data['Variant2: rollout percentage']  || "0" }   <br/>
      Variant 3:  {data['Variant3: rollout percentage']  || "0"}   <br/>
      Variant 4:  {data['Variant4: rollout percentage']  || "0"}   <br/>
      </td>
      <td style={{width:'25em',fontSize:'12px'}}>
        {data['Specify rollout percentages along with variants & location pages.'] || "NA"}
      </td>
    </tr>
    ))}
      </tbody>
    </table>

      </div>
      
  );
}

export default App;
