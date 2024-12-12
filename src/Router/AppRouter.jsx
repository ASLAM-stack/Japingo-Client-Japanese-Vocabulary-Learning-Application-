import { Route, Routes } from "react-router";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
 

const AppRouter = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/register" element={<Register/>}/> 
            {/* Public Routes */}
        </Routes>
    );
};

export default AppRouter;