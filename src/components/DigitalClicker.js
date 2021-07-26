// Code DigitalClicker Component Here
import React from 'react' 

class DigitalClicker extends React.Component {
    constructor(){
        super()

        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            <h3>{this.state.timesClicked}</h3>
            </div>
        )
    }
}

export default DigitalClicker;