
import { useState,useEffect } from 'react';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox, FormGroup,FormControlLabel } from '@mui/material';


function App() {

  const [value,setValue] = useState()
  const [check,setCheck] =useState(false)


  
const data =[
  {"idString":"idString 1","status":"status 1","sum":65,"qty":56,"volume":10,"name":"name 1","delivery_date":"delivery_date 1","currency":"$","id":"1"},
  {"idString":"idString 2","status":"status 2","sum":28,"qty":88,"volume":90,"name":"name 2","delivery_date":"delivery_date 2","currency":"€","id":"2"},
  {"idString":"idString 3","status":"status 3","sum":86,"qty":55,"volume":89,"name":"name 3","delivery_date":"delivery_date 3","currency":"¥","id":"3"},
  {"idString":"idString 4","status":"status 4","sum":4,"qty":95,"volume":67,"name":"name 4","delivery_date":"delivery_date 4","currency":"£","id":"4"},
  {"idString":"idString 5","status":"status 5","sum":9,"qty":3,"volume":44,"name":"name 5","delivery_date":"delivery_date 5","currency":"₸","id":"5"}
]
const data2 =[
  {"idString":"idString 6","status":"status 4","sum":10,"qty":78,"volume":25,"name":"name 6","delivery_date":"delivery_date 6","currency":"₽","id":"6"},
  {"idString":"idString 7","status":"status 5","sum":12,"qty":9,"volume":33,"name":"name 7","delivery_date":"delivery_date 7","currency":"₺","id":"7"}
]
  

function searchValue(arr){
  return value? arr.filter(el=>Object.values(el).includes(value.toLowerCase())) : arr 
    
} // Реализован поиск по наименованию.

const label = { inputProps: { 'aria-label': 'Checkbox demo'  }  };

  return (
    <div className="App">
          <h1>Is Work</h1>
          <input placeholder='Поиск' className='input' type="text" onChange={e=>setValue(e.target.value)} value={value} 
          />
          
          <TableContainer component={Paper}>
      <Table sx={{ maxWidth:1250, margin: "0 auto"}} aria-label="simple table">
        <TableHead>
          <TableRow>
          <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Выбрать все" />
          </FormGroup>
            <TableCell>Table</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">sum</TableCell>
            <TableCell align="right">qty</TableCell>
            <TableCell align="right">value</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">Всего</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchValue([...data, ...data2]).map((row) => ( //Получаем данные из масиво с функицией поиска по наименованию
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <Checkbox {...label}  />
              <TableCell component="th" scope="row">
                {row.delivery_date}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.sum}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.volume}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              
              <TableCell align="right">{row.qty*row.sum} {row.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}

export default App;
