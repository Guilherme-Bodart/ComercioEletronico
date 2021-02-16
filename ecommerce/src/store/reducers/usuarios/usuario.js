import { 
    LOGOUT_USUARIO,
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
}

const reducer = (state = initialState, action) => {

switch (action.type) {

   case LOGOUT_USUARIO:
       return initialState

   default:
       return state
}
}

export default reducer