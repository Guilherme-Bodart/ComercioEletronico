import { LOGOUT_USUARIO} from '../actionsType'

import axios from 'axios'

import swal from 'sweetalert';

export const logout = () => {
    return  {
        type: LOGOUT_USUARIO
    }
}
