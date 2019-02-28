import React, { Component } from 'react';

class Popup extends Component {

    render() {
        const {isOpen,content, closePop} = this.props
        return (
            isOpen && <div  className="overlay">
            <div className="popup">
                <button onClick={() => closePop()}>Close</button>
                <div className="content">
                    {content.map(list => <div>{list.name}</div>)}
                </div>
            </div>
        </div>
        )
    }
}

export default Popup;