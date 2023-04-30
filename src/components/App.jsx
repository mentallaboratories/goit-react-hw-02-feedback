import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import styled from 'styled-components';


export const Button = styled.button`
    color: red;
`;

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  incrementGood(){
    this.setState((state) => {
      console.log('state ->', this.state)
      return {good: state.good+=1}
    });
  }

  incrementOk(){
    this.setState((state) => {
      return {good: state.neutral+=1}
    });
  }

  incrementBad(){
    this.setState((state) => {
      return {good: state.bad+=1}
    });
  }


  render(){
    return(
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    > <Button type="button" onClick={this.incrementGood()}>good</Button>
      {/* <button type="button" onClick={incrementOk()}>ok</button>
      <button type="button" onClick={incrementBad()}>bad</button> */}
    </div>
    )
  }
} 
    
