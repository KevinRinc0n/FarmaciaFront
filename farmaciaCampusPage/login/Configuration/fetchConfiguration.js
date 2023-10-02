import { getCookieValue } from "./Cookies.js";
const token = getCookieValue("miToken");
export function configuration(bodys = null, metodo =null){
    if (bodys == null && metodo == null) {
        return{
            method:"GET",
            headers:{
                'Authorization': `Bearer ${token}`
            },
        };
    }
    else if(bodys != null && metodo.toUpperCase() == "POST"){
        return {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(bodys)
        };
    }
    else if(bodys != null && metodo.toUpperCase() == "PUT"){
        return {
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(bodys)
        };
    }
    else if(metodo.toUpperCase() == "DELETE"){
        return {
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };
    }
}
