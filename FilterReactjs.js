// App.jsx
import React from 'react';

function App() {
  const arr=[10,20,30,40,50,60,99,88,78,76]
const data=arr.filter(item=>item>40)
  return (
    <div>
    {
  
 data.map(item=><li>{item}</li>)
}
  </div>
  )
}

export default App;