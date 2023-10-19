import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "../components/Menu"
import Feed from "../pages/Feed"
import Profile from "../pages/Profile"
import PostDetail from "../pages/PostDetail"
import Login from "../pages/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu/>}>
          <Route path="/" element={<Feed />}></Route>
          <Route path="post/:id" element={<PostDetail />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
// -- 0. configurar la arquitectura del proyecto
// -- 1. configurar chakra
// -- 2. configurar rutas
// -- 3. crear componentes
// -- 4. implementar json server
// 5. implementamos useReducer
