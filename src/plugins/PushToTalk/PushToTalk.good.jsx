
import React from 'react'
import { connect } from 'react-redux'
import { getStore } from '../../'
import { 
    getUA,
    getFingerprint,
    createTing,
    getIpgeo,
    firstTing,
    ting,
} from './actions'

class PushToTalk extends React.Component {

    state = { timer: null }
    componentDidMount() { this.startTimer() }
    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        const store = getStore()
        const { 
            error,
            ticks,
            ua,
            fingerprint,
            fingerprinting,
            ipgeoing,
            ipgeo,
            tinging,
            tingSuccess,
            app,
        } = this.props.pushToTalk
        
        createTing()
        
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
            createTing()
        }

        if (!tinging && !tingSuccess && !error){
            if (app !== `push-to-talk`){
                firstTing()
            }
        }

        if (ticks % 5 === 0){
            if (tingSuccess){
                if (app !== `push-to-talk`){
                    ting()
                } else {
                    console.log ('DO NOT TING')
                }
            }
        }

        if (ticks % 20 === 0){
            if (error){
                store.dispatch({ type: `PUSHTOTALK/ERROR`, error: null })
                if (app !== `push-to-talk`){
                    firstTing()
                } else {
                    console.log ('DO NOT TING')
                }
            }
        }
        
        store.dispatch({ type: `PUSHTOTALK/TICK` }) 
    }

    startTimer = () => {
        const { tickInterval} = this.props.pushToTalk
        const {
            timer
        } = this.state
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickInterval * 1000) })
        }
        this.tick()
    }

    stopTimer = () => {
        const {
            timer
        } = this.state
        if (timer) {
            clearInterval(timer)
            this.setState({ timer: null })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = (store) => {
    return {
        pushToTalk: store.pushToTalk,
    }
}

export default (connect(mapStateToProps, null)(PushToTalk))
