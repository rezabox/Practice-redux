import { incrementAge, decrementAge, restAge } from "../redux/ageCounter/ageCounterAction"
import { useSelector, useDispatch } from "react-redux"

const AgeCounter = () => {
    const age = useSelector(state => state.age.age);
    const dispatch = useDispatch();

    return (
        <>
            <h1>with hooks - Age : {age}</h1>
            <button onClick={() => dispatch(incrementAge())}>Increment</button>
            <button onClick={() => dispatch(decrementAge())}>Decrement</button>
            <button onClick={() => dispatch(restAge())}>Rest</button>
        </>
    )
}

export default AgeCounter;