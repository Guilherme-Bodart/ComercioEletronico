import { 
    LOGOUT_USUARIO, LOGIN_USUARIO, VIEW_USUARIO, EDIT_USUARIO
} from '../../actions/actionsType.js'

const initialState = {
    email: '',
    nome: '',
    token: '',
    _id: '',
    permissao: '',
    telefone: '',
    endereco: '',
    cpf: '',
    dataNascimento: '',
    usuarios: [],
    getUsuario: {},
    logado: false,
    view:0,
}

const reducer = (state = initialState, action) => {

switch (action.type) {

    case LOGOUT_USUARIO:
       return initialState

    case LOGIN_USUARIO:
        let { email, _id, permissao} = action.payload.usuario;
        let token = action.payload.token
        let logado = true
        return {
            ...state, email, nome: action.payload.usuario.pessoa.nome, token, _id, permissao, logado, telefone: action.payload.usuario.pessoa.telefone, endereco: action.payload.usuario.pessoa.endereco, cpf: action.payload.usuario.pessoa.cpf, dataNascimento: action.payload.usuario.pessoa.dataNascimento
        }

    case EDIT_USUARIO:
        let email2 = action.payload.email
        let nome = action.payload.nome
        let telefone = action.payload.telefone
        let endereco = action.payload.endereco
        let dataNascimento = action.payload.dataNascimento
        let cpf = action.payload.cpf
        return {
            ...state, email: email2, nome, telefone, endereco, dataNascimento, cpf
        }

    case VIEW_USUARIO:
        let view = action.payload
        return {
            ...state, view,
        }

   default:
       return state
}
}

export default reducer