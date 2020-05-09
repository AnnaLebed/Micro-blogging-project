import React, { Component } from "react";
import './App.css';
import TweetForm from './components/TweetForm/TweetForm.js';
import TweetList from './components/TweetList/TweetList.js';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [],
      date:'',
      userName:'',
    }    
  }

  handleOnTweetFormSubmit(tweet){
    this.setState({list:[tweet,  ...this.state.list]});    
    let date = new Date().toISOString();
    this.setState({date})
    let userName = "Anna Lebed";
    this.setState({userName})
  }

  
  render(){
    const {date, userName} = this.state;
    return (
      <div className="App">         
        <TweetForm onTweetFormSubmit= {tweet => this.handleOnTweetFormSubmit(tweet)}/>                 
        <TweetList list = {this.state.list} date = {date} userName = {userName}/>
      </div>                
        
    );
  }
}


