import AdminPanel from "../visualComponents/AdminPanel";
import UserContext from "../context/userContext";
import {useContext} from "react";

function AdminPanelRoute() {
    const {token} = useContext(UserContext);
    if (!token) {
        return (<h1> Only logged administrator is authorized!</h1>);
    }
    return (
        <div className={"growing"}>
            <AdminPanel></AdminPanel>
        </div>
    )
}

export default AdminPanelRoute