import { 
    LOGOUT_USUARIO, LOGIN_USUARIO, VIEW_USUARIO
} from '../../actions/actionsType.js'

const initialState = {
    email: '',
    nome: '',
    token: '',
    _id: '',
    permissao: '',
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
        let { email, _id, permissao } = action.payload.usuario;
        let token = action.payload.token
        let logado = true
        return {
            ...state, email, nome: action.payload.usuario.pessoa.nome, token, _id, permissao, logado
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