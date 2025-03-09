import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./layouts";
import Dashboard from "./pages/admin";
import Album from "./pages/album.$id";
import Chatbox from "./pages/chatbox/chatbox";
import MessageList from "./pages/chatbox/messenger";
import Home from "./pages/home";
import HomeNoLogin from "./pages/homeNoLogin";
import Login from "./pages/login";
import PhotographerProfile from "./pages/profile";
import Profile from "./pages/profile.$id";
import Signup from "./pages/signup";
import SignupVerify from "./pages/signup.verify";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
        queryCache: new QueryCache({
          onError: (error: any) => {
            console.log("error", error?.response?.status);

            // if (error?.response?.status === 401) {
            //   window.location.href = '/logout'; // Redirect to login or any route
            // }
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            {/* guest */}
            <Route index element={<HomeNoLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/verify" element={<SignupVerify />} />
          </Route>

          {/* user */}
          <Route index path="/user/home" element={<Home />} />
          <Route path="/messenger" element={<MessageList />} />
          <Route path="/chatbox" element={<Chatbox />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile" element={<PhotographerProfile />} />
          <Route path="/album/:id" element={<Album />} />

          {/* admin */}
          <Route path="/admin/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
