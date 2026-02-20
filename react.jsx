import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useReducer,
  useContext,
  createContext
} from "react"


// context
const ThemeContext = createContext()


// reducer
function counterReducer(state, action){

  switch(action.type){

    case "increment":
      return {count: state.count + 1}

    case "decrement":
      return {count: state.count - 1}

    default:
      return state
  }
}


// child components
function Child({count, changeCount}){

  return (
    <div>

      <h3>Child Count: {count}</h3>

      <button onClick={changeCount}>
        Change Parent Count
      </button>

    </div>
  )
}


// context
function ThemeDisplay(){

  const theme = useContext(ThemeContext)

  return <h3>Theme: {theme}</h3>
}



// main
export default function App(){

  // useState
  const [count, setCount] = useState(0)


  // useReducer
  const [state, dispatch] = useReducer(counterReducer, {count: 0})


  // useRef
  const inputRef = useRef()


  // useEffect
  useEffect(() => {

    console.log("Component rendered")

  }, [count])


  // useMemo
  const expensiveCalculation = useMemo(() => {

    console.log("Calculating...")

    return count * 2

  }, [count])


  // useCallback
  const changeCount = useCallback(() => {

    setCount(prev => prev + 1)

  }, [])


  // condtional rendering
  const isLoggedIn = count > 2


  // func using ref
  function focusInput(){

    inputRef.current.focus()

  }


  return (

    <ThemeContext.Provider value="dark">

      <div>

        <h1>Main Count: {count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>


        <h2>Expensive Value: {expensiveCalculation}</h2>


        {/* conditional rendering */}
        {isLoggedIn
          ? <h3>User Logged In</h3>
          : <h3>User Logged Out</h3>
        }


        {/* child components */}
        <Child count={count} changeCount={changeCount} />


        {/* useReducer */}
        <h2>Reducer Count: {state.count}</h2>

        <button onClick={() => dispatch({type: "increment"})}>
          Reducer +
        </button>

        <button onClick={() => dispatch({type: "decrement"})}>
          Reducer -
        </button>


        {/* useRef */}
        <input ref={inputRef} placeholder="Click button to focus" />

        <button onClick={focusInput}>
          Focus Input
        </button>


        {/* useContext */}
        <ThemeDisplay />

      </div>

    </ThemeContext.Provider>

  )
}