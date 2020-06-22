import React from 'react'
import { connect } from 'react-redux'

class PushToTalk extends React.Component {
    state = { timer: null }
    componentDidMount() { this.startTimer() }
    componentWillUnmount() { this.stopTimer() }
    startTimer = () => {
        const { tickInterval} = this.props.pushToTalk
        const { timer } = this.state
        if (!timer) this.setState({ timer: setInterval(this.tick, tickInterval * 1000) })
        this.tick()
    }
    tick = () => {

    }
    stopTimer = () => {
        const { timer } = this.state
        if (timer) {
            clearInterval(timer)
            this.setState({ timer: null })
        }
    }

    render() {
        // console.log ('rendering pushToTalk')
        return null
    }
}

const mapStateToProps = (store) => {
    return { pushToTalk: store.pushToTalk }
}

export default (connect(mapStateToProps, null)(PushToTalk))
