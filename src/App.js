import React from "react";
import {Container , Typography , TextField , makeStyles , Grid , Button} from '@material-ui/core';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,

} from "@chakra-ui/react" ;

const useStyles = makeStyles({
  root:{
    textAlign:'center',
    paddingTop:'2rem',
    paddingBottom:'2rem',
  },
  fields:{
    paddingTop:'2rem',
    paddingBottom:'1rem',
  },
  tr:{
    padding:'1rem',
  }
});

function App() {
const [name , setName] = React.useState('');
const [email , setEmail] = React.useState('');
const [number , setNumber] = React.useState('');
const [img , setImg] = React.useState('');
const [arr , setArr] = React.useState([]);
const sub =(e)=>{
  e.preventDefault();
  const newArr ={
    name:name,
    email:email,
    number:number,
    img:img,
  }
  setArr([...arr, newArr]);
  

}


  const classes = useStyles();
  return <>
  <Container maxWidth='md'>
    <Grid container>
      <Grid item md={12}>
      <div className={classes.root}>
      <Typography variant='h5'>
          User Details
      </Typography>
    </div>
      </Grid>
     
      <Grid item md={4}  className={classes.fields}>
        <TextField id="name" onChange={(e)=>{setName(e.target.value)}} label="Name" variant="outlined"/>
      </Grid>
      <Grid item md={4} className={classes.fields}>
        <TextField id="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} label="Email ID" variant="outlined"/>
      </Grid>
      <Grid item md={4} className={classes.fields}>
        <TextField id="number" type="number" onChange={(e)=>{setNumber(e.target.value)}} label="Phone No." variant="outlined"/>
      </Grid>
      <Grid item md={12} className={classes.fields}>
      <input type="file"  onChange={(e)=>{setImg(e.target.value)}} class="form-control-file" id="exampleFormControlFile1"/>
      </Grid>
      <Grid item md={12} className={classes.fields}>
      <Button onClick={sub} variant="contained" color="primary">
  Submit
</Button>
</Grid>

<Grid item md={12} className={classes.fields}>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>S.No</Th>
          <Th>Name</Th>
          <Th>Email Id</Th>
          <Th>Phone No.</Th>
          <Th>Image</Th>
        </Tr>
      </Thead>
      <Tbody>

       {
         arr.map((data, Index)=>{
           return <>
   <Tr>
   <Td className={classes.tr}>{Index+1}</Td>
  <Td  className={classes.tr}>{data.name}</Td>
  <Td  className={classes.tr}>{data.email}</Td>
  <Td className={classes.tr}>{data.number}</Td>
  <Td className={classes.tr}>{data.img}</Td>
   </Tr>
   </>
        })}
     
      </Tbody>
    </Table>
</Grid>
    

    </Grid>
   

  </Container>
  </>
}

export default App;
