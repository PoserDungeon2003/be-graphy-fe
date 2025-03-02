import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Layout } from "./layouts";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import SignupVerify from "./pages/signup.verify";
import Profile from "./pages/profile.$id";
import PhotographerProfile from "./pages/profile";
import Album from "./pages/album.$id";

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
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/verify" element={<SignupVerify />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/profile" element={<PhotographerProfile />} />
            <Route path="/album/:id" element={<Album />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
