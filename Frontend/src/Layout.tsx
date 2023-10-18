import {Outlet} from "react-router-dom";
import {Header} from "./Pages/Header/Header";

export const Layout = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}