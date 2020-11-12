import React from 'react';
import {HeartOutline, ShareOutline, ChatOutline, DotsHorizontalOutline, TrashOutline} from '@graywolfai/react-heroicons';
import './styles.css';
import ContextMenu from '../context-menu';


class Tweet extends React.Component{
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div className="tweet-container">

                <div className="tweet-options-container">
                    <div className="tweet-options" onClick={() => this.props.contextFn.toggleContextMenuFn(this.props.index)}>
                        <DotsHorizontalOutline />
                    </div>
                    {
                    this.props.showContextM ? (<ContextMenu removeFn={this.props.contextFn.removetweetFn} index={this.props.index} />) :  null
                }
                </div>
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row content-container">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="reactions">
                    <div className="comments">
                        <ChatOutline />
                        <span>{this.props.reactions.comments}</span>
                    </div>
                    <div className="retweets" onClick={this.handleClickRT}>
                        <ShareOutline />
                        <span>{this.props.reactions.retweets}</span>
                    </div>
                    <div className="likes" likes onClick={this.handleClickLike}>
                        <HeartOutline />
                        <span>{this.props.reactions.likes}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.