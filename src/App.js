import { Outlet } from "react-router-dom";
import UfoodProvider from "./context/UfoodProvider";

function App() {
    return (
        <>
            <UfoodProvider>
                <Outlet />
            </UfoodProvider>
        </>
    );
}

export default App;
