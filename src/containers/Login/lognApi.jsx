import axios from "axios";
import history from "../../routes/history";
import {setUserInfo} from "../../actions/userInfo/userInfoActions";

export const LoginApi = {
login: (userData, dispatch) =>  {
    // const userData = {
    //     email: "eve.holt@reqres.in",
    //     password: "cityslicka"
    // }
    const historyTargetObj = {
        pathname: "/home"
      };
    axios.post("https://reqres.in/api/login",
        userData
    ).then((res) => {
        localStorage.setItem("token",res.data.token );
        history.push(historyTargetObj);
        setUserInfo(res.data.token)(dispatch);
        dispatch({ type: 'SET_USER_INFO', payload: res })
        alert("success")
    }).catch((error)=>{
        console.log(error)
        alert("wrong email or password")
    })
    
}

}