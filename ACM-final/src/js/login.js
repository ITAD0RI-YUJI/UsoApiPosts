import axios from './Axios.js'

export default async function login(passwordPar , user){
    return axios.post('auth/login' , {
        username: user,
        password: passwordPar
    
    }).then((response) =>{
        console.log("loged trayed, response: " , response)
        return response
    
    }).catch((error) => {
        console.error(error)
    })
}