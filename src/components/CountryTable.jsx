import axios from 'axios';
import * as React from 'react'
import DataTable from 'react-data-table-component'
import Button from '@mui/material/Button';
const CountryTable = () => {
 const [countries , setCountries] = React.useState([]);
 const getCountries = async() => {
    try {
        const response = await axios.get('https://restcountries.com/v2/all')
        setCountries(response.data);
    } catch (error) {
        console.error(error)
    }
 };
const columns = [
{
    name: 'Country Name',
    selector: row=> row.name,
    sortable: true,
},
{
    name: 'Country Native Name',
    selector: row=> row.nativeName
},
{
    name: 'Country Captial',
    selector: row=> row.capital
},
{
    name: 'Country Flag',
    selector: row=> <img width={50} height={50} src={row.flag}/>
},
{
    name :'Action',
    cell: (row)=>  <Button variant="contained"onClick={()=>{alert(row.callingCodes)}}>Countrycode</Button>
}

]                                                                                                       




React.useEffect(()=>{
    getCountries();
},[])
  return (
    <>
     <DataTable title='country table' columns={columns} data={countries} 
     pagination
     fixedHeader
     selectableRows
     selectableRowsHighlight
     fixedHeaderScrollHeight='500px'
     highlightOnHover/> 
    </>
  );
}

export default CountryTable
