import React, { Component } from "react";
import './App.css';
import TweetForm from './components/TweetForm/TweetForm.js';
import TweetList from './components/TweetList/TweetList.js';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : []
    }
    
  }

  handleOnTweetFormSubmit(tweet){
    this.setState({list:[tweet, ...this.state.list]});
  }

  
  render(){
    return (
      <div className="App">         
        <TweetForm onTweetFormSubmit= {tweet => this.handleOnTweetFormSubmit(tweet)}/>                 
        <TweetList list = {this.state.list} />
      </div>                
        
    );
  }
}


