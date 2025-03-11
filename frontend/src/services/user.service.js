import {postRequest} from "@/services/axios.services";

async function loginUserFromAPI(data){
    // console.log("login",data)
    return postRequest("/auth/signin",data,"SIGNIN") ;
}
async function loginUser(data){
    let response = null;
    try {
        response = await loginUserFromAPI(data);
    }
    catch(err) {
        console.error(err," ",response)
        response = {error: 1, status: 404, data: 'erreur rÃ©seau, impossible de se loguer'  }
    }
    return response
}


async function registerUserFromAPI(data){
    console.log("register",data)
    return postRequest("/auth/signup",data,"SIGNUP") ;
}
async function registerUser(data){
    let response = null;
    try {
        response = await registerUserFromAPI(data);
    }
    catch(err) {
        console.error(err," ",response)
        response = {error: 1, status: 404, data: 'erreur rÃ©seau, impossible de se loguer'  }
    }
    return response
}

export default {
    loginUser,
    registerUser
}