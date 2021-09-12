import axios from "axios";
import history from "../../routes/history";


export const LoginApi = {
login: () =>  {
    const userData = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }
    const historyTargetObj = {
        pathname: "/home"
      };
    axios.post("https://reqres.in/api/login",
        userData
    ).then((res) => {
        history.push(historyTargetObj)
        alert("success")
    }).catch((error)=>{
        console.log(error)
        alert("failed")
    })
    
}

}