import { increment, decrement, rest } from "../redux/counter/counterAction"
import { useSelector, useDispatch } from "react-redux"

const HooksCounter = () => {
    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();

    return (
        <>
            <h1>with hooks - count : {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(rest())}>Rest</button>
        </>
    )
}

export default HooksCounter;