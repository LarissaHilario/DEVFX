import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PublicRoutes from "./PublicRouter";

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/*<Route
            path="/login"
            element={
              <PublicRoutes>
                <Login/>
              </PublicRoutes>
            }
          />
          <Route
            path="/Registro"
            element={
              <PublicRoutes>
                
              </PublicRoutes>
            }
        />*/}
          <Route
            path="/LandingPage"
            element={
              
               <LandingPage/>
             
            }
          />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;
  