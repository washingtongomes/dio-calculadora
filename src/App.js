import { Container, Content, Row } from "./styles"
import Input from './components/Input';
import Button from './components/Button';
import { useState } from "react";


const App = () =>  {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = ()=>{
  setCurrentNumber('0')
  setFirstNumber('0')
  setOperation('')
  };

  const handleAddNumber = (num) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };


const handleSumNumbers = () =>{
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('+')
  }
  else{
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum))
    setOperation('')

  }
}

const handleSubNumbers = () =>{
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('-')
  }
  else{
    const sum = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(sum))
    setOperation('')

  }
}

const handleMultiplicaNumbers = () =>{
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('*')
  }
  else{
    const sum = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(sum))
    setOperation('')

  }
}

const handleDivideNumbers = () =>{
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('/')
  }
  else{
    const sum = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(sum))
    setOperation('')

  }
}

const handleEquals = () =>{
  if(firstNumber !== '0' && operation && operation !== '' && currentNumber !=='0'){
    switch(operation){
      case '+':
        handleSumNumbers();
        break;

      case '-':
        handleSubNumbers(); 
        break; 

      case '*':
        handleMultiplicaNumbers(); 
        break; 

        case '/':
        handleDivideNumbers(); 
        break; 


      default:
        break  

  }
 
}
}

  return (
      <Container>
        <Content>
          <Input value={currentNumber}/>

          <Row>
            <Button label='9' onClick={()=> handleAddNumber('9')}/>            
            <Button label='C' onClick= {handleOnClear} />            
            <Button label='=' onClick={handleEquals}/>            
            <Button label='/' onClick={handleDivideNumbers} />            
          </Row>

          <Row>
            <Button label='6' onClick={()=> handleAddNumber('6')}/>            
            <Button label='7' onClick={()=> handleAddNumber('7')}/>            
            <Button label='8' onClick={()=> handleAddNumber('8')}/>            
            <Button label='-' onClick={handleSubNumbers}/>            
          </Row>

          <Row>

            <Button label='3'onClick={()=> handleAddNumber('3')}/>            
            <Button label='4' onClick={()=> handleAddNumber('4')}/>            
            <Button label='5' onClick={()=> handleAddNumber('5')}/>            
            <Button label='+' onClick= {handleSumNumbers}/>            
          </Row>


          <Row>
            <Button label='0' onClick={()=> handleAddNumber('0')} /> 
            <Button label='1'onClick={()=> handleAddNumber('1')}/>            
            <Button label='2'onClick={()=> handleAddNumber('2')} />            
            <Button label='*'onClick={handleMultiplicaNumbers}/>            
          </Row>
       


        </Content>
      </Container>
  );
}

export default App;
