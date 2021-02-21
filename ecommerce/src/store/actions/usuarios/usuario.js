import { LOGOUT_USUARIO, LOGIN_USUARIO } from '../actionsType'
import { Redirect } from "react-router-dom";

import axios from 'axios'

import swal from 'sweetalert';

export const logout = () => {
    return  {
        type: LOGOUT_USUARIO
    }
}

export const autenticarUsuario = usuario => {
    return async (dispatch) => {
        const { email, senha } = usuario
        await axios.post("https://leds-skills.herokuapp.com/auth/authenticate", null,  { params: {
            email,
            senha
          }})
            .then(async response => {
                
                usuario = response.data
                
                await dispatch(armazenaInfoUsuario(usuario))
            })
            .catch(error => {
                if( error.response ){
                    var erro_msg = error.response.data.error; // => the response payload 
                }
                swal({
                    title: "Error",
                    text: 'Falha no login, '+erro_msg,
                    icon: "error",
                  });

            })
    }
}

export const armazenaInfoUsuario = usuario => {
    return {
        type: LOGIN_USUARIO,
        payload: usuario,
    }
}

export const criarUsuario = usuario => {

    return async (dispatch) =>  {
        const { nome, email, senha, cpf, telefone, endereco, dataNascimento, permissao } = usuario


        await axios.post("https://leds-skills.herokuapp.com/auth/register", null, 
                { params: {
                    nome,
                    email,
                    senha,
                    cpf,
                    telefone,
                    endereco,
                    dataNascimento,
                    permissao
                    }
                }
            )
            .then(response => {
                 swal({
                    title: "Sucesso",
                    text: 'Usuário cadastrado com sucesso',
                    icon: "success",
                  }).then( async (response) => {
                    usuario = response.data
                
                    await dispatch(armazenaInfoUsuario(usuario))
                  });
            })
            .catch( error => {
                if( error.response ){
                    var erro_msg = error.response.data.error; // => the response payload 
                }
                swal({
                    title: "Error",
                    text: 'Falha no cadastro, '+erro_msg,
                    icon: "error",
                  });
            })
    }
}

export const enviarEmailReset = email => {

    return async (dispatch) =>  {

        await axios.post("https://leds-skills.herokuapp.com/auth/forgot_password", null, 
                { params: {
                    email
                    }
                }
            )
            .then(response => {
                swal({
                    title: "Sucesso",
                    text: 'O e-mail de recuperação de senha foi enviado com sucesso',
                    icon: "success",
                  })
            })
            .catch( error => {
                if( error.response ){
                    var erro_msg = error.response.data.error;
                }
                swal({
                    title: "Error",
                    text: 'Falha no envio, '+erro_msg,
                    icon: "error",
                  })
            })
    }
}

export const recuperarSenha = usuario => {

    return async (dispatch) =>  {
        const { senha, token } = usuario


        await axios.post("https://leds-skills.herokuapp.com/auth/reset_password", null, 
                { params: {
                    senha,
                    token
                    }
                }
            )
            .then(response => {

                swal({
                    title: "Sucesso",
                    text: 'Sua senha foi alterada com sucesso',
                    icon: "success",
                }).then((value) => {
                    <Redirect to= "/login"/>
                });          
            })
            .catch( error => {
                if( error.response ){
                    var erro_msg = error.response.data.error; // => the response payload 
                }
                swal({
                    title: "Error",
                    text: 'Falha ao resetar a senha, '+erro_msg,
                    icon: "error",
                  })
            })
    }
}
