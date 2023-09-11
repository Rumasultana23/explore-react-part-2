
import './App.css'
import Counter from './counter';
import Friends from './friends';
import Team from './team';
import Users from './users';


function App() {

  function handleClick() {
    alert("button");
  };

  const handleClick2 = () => {
    alert('btn 2');
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2>React Core Concepts</h2>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('third') }}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
};

export default App
