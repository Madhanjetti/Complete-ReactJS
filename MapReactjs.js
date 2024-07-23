// App.jsx
import React from 'react';

function App() {
  const arr=["reactJs","ExpressJs","NodeJs","Mongodb","Javascript"]
  return (
    <div>
    {
  
  arr.map(
    (value,index) =><li key={index}>{value}</li>
  )
}
  </div>
  )
}

export default App;
