import React from 'react';
import {TrashOutline} from '@graywolfai/react-heroicons';
import Feed from "./feed"

export default function ContextMenu(props) {
    return (
        <div className="contextual-dropdown">
            <div className="contextual-dropdown__row" onClick={() => props.removeFn(props.index)}>
                  { <div className="tweet-options-menu">
                        <div className="tweet-options-menu__row">
                            <TrashOutline /><span>No me interesa este tweet</span>
                        </div>
                    </div> }

                {console.log("eliminar")}
            </div>
        </div>
    )
}