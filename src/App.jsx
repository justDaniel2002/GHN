import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Home from "./pages/Home"
import Mainlayour from "./layouts/mainlayour"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
      >
        <Route path="/" element={<Mainlayour />}>
          <Route index element={<Home />} />
        
        </Route>

        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
    ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
