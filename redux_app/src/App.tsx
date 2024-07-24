
import './App.css'
import { decrement, increment } from './redux/counter/counterSlice'
import { toggle, setToggleValue } from './redux/toggle/toggleSlice'
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const toggleEvent = useSelector((state: RootState) => state.toggle.value)
  return (
    <>
      <h1>The count value is {count}</h1>
      <button onClick={() => dispatch(decrement())} style={{ backgroundColor: 'red', margin: '10px' }}>-</button>
      <button onClick={() => dispatch(increment())} style={{ backgroundColor: 'blue', margin: '10px' }}>+</button>
      <h2>The toggle value is {toggleEvent ? "true" : 'false'}</h2>
      <button onClick={() => dispatch(toggle())} style={{ backgroundColor: 'green', margin: '10px' }} >Change toggle </button>
      <button onClick={() => dispatch(setToggleValue(true))} style={{ backgroundColor: 'pink', margin: '10px' }} >Change toggle value</button>
    </>
  )
}

export default App
