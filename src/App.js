
import Root from "./pages/Root";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Create } from "@mui/icons-material";
import Home from "./pages/Home/Home";
import Creact from "./pages/Creact/Creact";
const router = createBrowserRouter(
  createRoutesFromElements(
    <router path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Creact />} />

      {/* ... etc. */}
    </router>
  )
);
function App() {
  return (
   
         <RouterProvider router={router} /> 
 
  );
}

export default App;
