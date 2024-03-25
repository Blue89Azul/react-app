import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
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