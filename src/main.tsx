import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './layouts/root-layouts';
import { Home } from './routes/home';
import { OnboardingRoute } from './routes/onboarding';
import { DashboardRoute } from './routes/dashboard';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/onboarding", element: <OnboardingRoute /> },
      { path: "/dashboard", element: <DashboardRoute /> },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
