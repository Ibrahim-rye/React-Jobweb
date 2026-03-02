import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/Mainlayout";
import Homepage from "./pages/Homepage";
import Jobspage from "./pages/Jobspage";
import NotFoundpage from "./pages/NotFoundpage";
import Jobpage, { jobLoader } from "./pages/Jobpage";
import AddJobpage from "./pages/AddJobpage";
import EditJobpage from "./pages/EditJobpage";

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobspage />} />
        <Route path="/add-job" element={<AddJobpage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<Jobpage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobpage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundpage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
