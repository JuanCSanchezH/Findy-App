import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "../components/Menu"
import Feed from "../pages/Feed"
import Profile from "../pages/Profile"
import PostDetail from "../pages/PostDetail"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { createContext, useEffect, useReducer } from "react"
import userLoggedReducer, { userLoggedInitial } from '../reducers/userLoggedReducer';
import useSessionStorage from "../hooks/useStorage"
import PrivatedRoutes from "./privateRouter"
import PublicRoutes from "./publicRouter"
import postsReducer, {postsInitial} from "../reducers/postsReducer"

export const AppContext = createContext({});

function App() {
  
  const [userLogged, userLoggedDispatch] = useReducer(userLoggedReducer, userLoggedInitial);
  const [posts, postsDispatch] = useReducer(postsReducer, postsInitial);
  const { storagedData } = useSessionStorage('user');

  useEffect(() => {
    if (!userLogged.user && storagedData) {
      userLoggedDispatch({
        type: 'LOGIN',
        payload: {
          isAuthenticated: true,
          user: storagedData
        }
      })
    }
  }, [userLogged, storagedData])

  const globalStates = {
    userLogged: { userLogged, userLoggedDispatch },
    posts: {posts, postsDispatch}
  }

  return (
    <AppContext.Provider value={globalStates}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route element={<PrivatedRoutes isAuthenticate={userLogged.isAuthenticated} />}>
              <Route element={<Menu/>}>
                <Route index element={<Feed />} />
                <Route path='feed' element={<Feed />} />
                <Route path="profile" element={<Profile/>}></Route>
                <Route path="post/:id" element={<PostDetail/>}></Route>
              </Route>
            </Route>
            <Route element={<PublicRoutes isAuthenticate={userLogged.isAuthenticated} />}>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
// -- 0. configurar la arquitectura del proyecto
// -- 1. configurar chakra
// -- 2. configurar rutas
// -- 3. crear componentes
// -- 4. implementar json server
// 5. implementamos useReducer
