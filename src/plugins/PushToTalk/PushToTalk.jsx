import React from 'react'
import { connect } from 'react-redux'
import { getStore } from '../../'
import { 
    getUA,
    getFingerprint,
    // createTing,
    getIpgeo,
    // firstTing,
    // ting,
} from './actions'

class PushToTalk extends React.Component {
    state = { timer: null }
    componentDidMount() { this.startTimer() }
    componentWillUnmount() { this.stopTimer() }
    
    startTimer = () => {
        const { 
            tickInterval, 
        } = this.props.pushToTalk
        const { timer } = this.state
        if (!timer) this.setState({ timer: setInterval(this.tick, tickInterval * 1000) })
        this.tick()
    }

    tick = () => {
        const store = getStore()
        store.dispatch({ type: `PUSHTOTALK/TICK` }) 
        const {
            ticks,
            ua,
            fingerprint,
            fingerprinting,
            ipgeoing,
            ipgeo,
            // tinging,
            // tingSuccess,
            // app,
            // error,
        } = this.props.pushToTalk

        // createTing()
        if (!ua){
            getUA()
        }   
        if (!ipgeo && !ipgeoing){
            getIpgeo()
        }
        if (!fingerprint && !fingerprinting){
            getFingerprint()
        }
        if (ticks === 2){
            // createTing()
        }
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
