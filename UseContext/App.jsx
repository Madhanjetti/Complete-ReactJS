import Apps from './Components/Apps'

export const context = createContext();
const App = () => {
  let name='Jhon';
  return (
  <>
  <context.Provider value={name}>
      <Header></Header>
     </context.Provider>
     
</>
  )
}

export default App