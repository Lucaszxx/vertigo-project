import olho from '../../assets/olho.jpeg';

import { useState } from 'react'
import './index.css'

export function Content() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleGetData() {
        var inputEmail = document.getElementById('email')
        var emailValue = inputEmail.value;
        setEmail(emailValue)

        var inputSenha = document.getElementById('senha')
        var senhaValue = inputSenha.value;
        setSenha(senhaValue)
    }

    function showData() {
        if(email == '' || senha == '') {
            alert("Preencha todos os campos.")
        } else {
            alert(`Email: ${email} \nSenha: ${senha}`)
        }
    }

    function showPass() {
        var x = document.getElementById("senha");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return (
        <section>
            <div className="title">
                <h1>Acesse a plataforma</h1>
                <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
            </div>
            <div className="form">
                <div className="inputs">
                    <label>E-mail</label>
                    <input type="text" placeholder='Digite seu e-mail' id='email' onChange={handleGetData}/>
                </div>
                <div className="inputs">
                    <label >Senha <a href=''>Esqueceu a senha?</a></label>
                    <input type="password" className='inputSenha' placeholder='Digite sua senha' id='senha' onChange={handleGetData}/>
                    <img className="field-icon" src={olho} alt="" onClick={showPass}/>
                </div>
                <div className="enterButton">
                    <button onClick={showData}>Entrar</button>
                </div>
                <div className="registrar">
                    <p>Ainda não tem uma conta? <a href="">Inscreva-se</a></p>
                </div>
            </div>
        </section>
    )
}