import React from "react";

const TweetList = (props) => {
    const {list, userName, date} = props;
    return(
        <ul className = "list-style"> 
                             
            {list.map((item, index) => 
            <li className="tweet-box"
            key = {index}>{item}
            <div className = "tweet-date-position">{date}</div>
            <div className = "tweet-name-position">{userName}</div>
            </li> 
            )}            
        </ul>
    )
}

export default TweetList;