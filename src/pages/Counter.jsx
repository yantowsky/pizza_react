import { useReducer, useState } from 'react';

const Counter = () => {

    const initialState = { count: 0 };
    const [value, setValue] = useState(0);

    const reducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return { count: state.count + 1 };
            case "Decrement":
                return { count: state.count - 1 };
            case "Reset":
                return { count: 0, value: setValue(0) };
            case "IncrementByAnyValue":
                return { count: state.count + Number(action.payload) };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div className='counter'>
            <p>
                COUNTER:
            </p>
            <button onClick={() => dispatch({ type: "Increment" })}>
                +
            </button>
            <p>
                {state.count}
            </p>
            <button onClick={() => dispatch({ type: "Decrement" })}>
                -
            </button>
            <input type="number" placeholder='Input any value' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => dispatch({ type: "IncrementByAnyValue", payload: value })}>
                Increment by value
            </button>
            <button onClick={() => dispatch({ type: "Reset" })}>
                RESET
            </button>
        </div>
    );
}

export default Counter;