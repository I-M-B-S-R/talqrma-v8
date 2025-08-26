import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import all our components
import Layout from './Layout.jsx';
import HomePage from './HomePage.jsx';
import ArizonaLawsPage from './ArizonaLawsPage.jsx';
import FederalLawsPage from './FederalLawsPage.jsx';
import LawDetailPage from './LawDetailPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // The Layout is now the parent for all routes
    children: [
      { index: true, element: <HomePage /> }, // Homepage
      { path: 'arizona', element: <ArizonaLawsPage /> },
      { path: 'federal', element: <FederalLawsPage /> },
      { path: 'law/:lawId', element: <LawDetailPage /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);