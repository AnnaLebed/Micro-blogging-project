import React from "react";

const TweetList = (props) => {
    const {list} = props;
    return(
        <ul className = "list-style">
            
            {list.map((item, index) => 
            <li className="tweet-box"
            key = {index}>{item}</li>
            )}            
        </ul>
    )
}

export default TweetList;