//React imports
import { ChangeEvent, FormEvent, useState } from 'react';

//stylesheet
import './MyForm.css'


function MyForm() {

  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input 
            type="text" 
            name="nome"
            placeholder='Digite seu nome' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}/>          
        </div>

        {/*envolvendo input ao lebal*/}
        <label>
          <span>E-mail</span>
          <input 
            type="email" 
            name='email' 
            placeholder='Digite seu e-mail' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
        </label>
        <input type="submit" value="Enivar"/>        
      </form>
    </div>
  )
}

export default MyForm