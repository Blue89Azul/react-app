import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar />
      <Hero title="Main Titile" subtitle="This is subtitle" />
      <HomeCards />
      <JobListings />
      <ViewAllJobs /> */}
    </>
  );
}

export default App;