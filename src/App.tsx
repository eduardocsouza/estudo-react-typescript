import './App.css'
import ControllerInput from './components/ControllerInput/ControllerInput'
import MyForm from './components/Myform/MyForm'

function App() {
  
  return (
    <div className="App">
      <h1>1 Formulário</h1>
      <MyForm/>
      <br />
      <hr />
      <h1>2 Formulário com controle de input</h1>
      <ControllerInput user={{nome: 'eduardo', email: 'eduardo@gmail.com'}}/>
    </div>
  )
}

export default App
