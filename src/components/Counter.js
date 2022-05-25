import { increment, decrement, rest } from "../redux/counter/counterAction"
import { connect } from "react-redux"

const Counter = (prpos) => {
    return (
        <>
            <h1>count : {prpos.count}</h1>
            <button onClick={prpos.increment}>Increment</button>
            <button onClick={prpos.decrement}>Decrement</button>
            <button onClick={prpos.rest}>Rest</button>
        </>
    )
}

const mapStateProps = (state) => {
    return {
        count: state.count.count
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        rest: () => dispatch(rest()),
    }
}

export default connect(mapStateProps, mapDispatchProps)(Counter);