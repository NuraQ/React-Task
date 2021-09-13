import { useEffect } from "react";
import { useSelector } from "react-redux";


const HomePage = () => {
    const getUserToken = (state) => state.userData.user;
    const token = useSelector(getUserToken);

    useEffect(() => {
        console.log(token)

    })
    return (
        <div>
            Hello
        </div>
    )
}
export default HomePage;