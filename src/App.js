
import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <router path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />

      {/* ... etc. */}
    </router>
  )
);
function App() {
  return (
    <div >
         <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
