import React, { Component } from "react";
// import { Form, Button, Alert } from "react-bootstrap";

export default class TweetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {   
      tweet:'',        
      date: '',
      userName: 'Anna',    
     
      // loader: true,
      max_chars: 140,
      disableButton: false,
      maxLength: false,    
     
    };
    this.handleTweet = this.handleTweet.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleTweet(event) {
    // const value  = {tweet: event.target.value }
    console.log(event.target.value);
    this.setState({ tweet: event.target.value });  
    // this.setState ({tweet: {content:event.target.value}}); 
    const charCount = event.target.value.length;
    if (charCount > 140) {
      this.setState({
        disableButton: true,
        maxLength: true,
      });
    }
      
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(`The form was submitted with ${this.state.tweet}`);
    this.props.onTweetFormSubmit(this.state.tweet);
    this.setState({ tweet: "" });
    // this.state({time: new Date()});
  }

  render() {
    const { disableButton, maxLength, tweet } = this.state;
    return (
      <form onSubmit= {this.handleOnSubmit}
      className="tweet-form">
        <textarea
          name="message"
          className="tweet-input"
          rows = "5"
          cols="40"
          onChange={this.handleTweet}
          value={this.state.tweet}
          placeholder="What you have in mind"
        />       
        <button
          disabled={disableButton}
          name="submit"
          className="button btn-primary"
        >Tweet
        </button>
        <div
          className="alert alert-danger alert-box"
          role="alert"
          style={{ display: maxLength ? "" : "none" }}>
          Tweet can't contain more then 140 chracters!
        </div>
      </form>
    );
  }
}
