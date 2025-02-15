import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./layouts";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/Register";

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
            <Route path="/signup" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
