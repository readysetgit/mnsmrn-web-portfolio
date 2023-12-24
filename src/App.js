import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { MainContent } from './components/MainContent';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Project from './components/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects/:project_id",
    element: <Project />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
