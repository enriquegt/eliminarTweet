import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    removeTweet = (index) => {
        //Clonar la lista de objetos
        let tweetsClone = [...this.state.tweets];
        //Eliminamos el elemento del arreglo
        tweetsClone.splice(index, 1);
        //Actualizamos el estado
        this.setState({tweets: tweetsClone});
    }

    toggleContextMenu = (index) => {
       
        //Clonar la lista de objetos
        let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
        //Actualizamos el valor de la propiedad selected
        tweetsClone[index].showContextM = !tweetsClone[index].showContextM;
        //Actualizamos el estado
        this.setState({tweets: tweetsClone});
    }


    render() {
        
        const contextFn = {
            toggleContextMenuFn: this.toggleContextMenu,
            removetweetFn: this.removeTweet,
        }

        return (
            <div>
                {
                    this.state.tweets.map( (tweet, index) => {
                        return (
                            <Tweet
                                index={index}
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                reactions={tweet.interaction}
                                showContextM={tweet.showContextM}
                                contextFn={contextFn}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;