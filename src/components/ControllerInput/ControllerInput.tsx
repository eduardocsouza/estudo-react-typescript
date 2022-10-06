//react imports
import { ChangeEvent, FormEvent, useState } from 'react';

//stylesheet
import './ControllerInput.css';

interface Props{
   user:{
    nome:string,
    email:string, 
    role:string,
    bio:string
   }
}

function ControllerInput({ user }: Props) {

    const [nome, setNome] = useState<string>(user ? user.nome : '' );
    const [email, setEmail] = useState<string>(user ? user.email : '');

    const [bio, setBio] = useState<string>(user ? user.bio : '');

    const [role, setRole] = useState<string>(user ? user.role : '');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log("segundo form")
        console.log(nome, email, bio, role);

        setNome('')
        setEmail('')
        setBio('')
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>Nome:</span>
            <input 
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}                 
            />
        </label>
        <label>
            <span>E-mail:</span>
            <input 
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}                  
            />
        </label>
        <h2>Utilizando o textarea</h2>
        <textarea 
            name="bio"  
            cols={30} 
            rows={10} 
            placeholder="Fala sobre você"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
        >
        </textarea>
         {/*Select */}
         <label>
            <span>
                <h2>Utilizando o select</h2>
            </span>
            <select name="lista" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">admin</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />       
    </form>
  )
}

export default ControllerInput