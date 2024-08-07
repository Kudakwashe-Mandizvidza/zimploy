import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { JobList } from "./job/JobList";
import { UserJobs } from "./job/pages/UserJobs";
import { Profile } from "./user/Profile";
import { NewJob } from "./job/pages/NewJob";
import { UpdateJob } from "./job/pages/UpdateJob";
import { Auth } from "./pages/Auth";
import { DashBoard } from "./pages/DashBoard";
import { Settings } from "./pages/Settings";
import { Post } from "./pages/Post";
import { Notifications } from "./pages/Notifications";
import { Messages } from "./job/pages/Messages";
import { WishList } from "./pages/WishList";
import { Chat } from "./pages/Chat";
import { EventPost } from "./components/EventPost";
import { PollsPost } from "./components/PollsPost";
import { MediaPost } from "./components/MediaPost";
import { EventsList } from "./components/EventsList";
import { Signup } from "./components/Signup";
import { AccountTypeForm } from "./components/AccountTypeForm";
import { EmployeeRegistrationForm } from "./components/EmployeeRegistrationForm";
import { EmployerRegistrationForm } from "./components/EmployerRegistrationForm";
import { Login } from "./components/Login";
import { ProfileForm } from "./components/ProfileForm";
import ApplicationForm from "./components/applicationForms/ApplicationForm";
import { AboutDeveloper } from "./DeveloperPages/AboutDeveloper";
import { ConnectionList } from "./user/ConnectionList";
import { AppliedJobs } from "./DashboardItems/AppliedJobs";
import { LatestJobs } from "./DashboardItems/LatestJobs";
import { JobOffers } from "./DashboardItems/JobOffers";
import { Applicants } from "./DashboardItems/Applicants";
import { EducationForm } from "./components/applicationForms/EducationForm";

function App() {
  const [profile, setProfile] = useState({
    userName:'',
    professionTitle:'',
    bio:'',
    address:'',
    website:'',
    employmentStatus:'',
    keySkills:'',
    jobExperience:'',
    education:'',
    profileImage:'',
    coverImage:''
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/jobList" element={<JobList />} />
        <Route path="/:userId/jobs" element={<UserJobs />} />
        <Route path="/:userId/profile" element={<Profile profile={profile} />} />
        <Route path="/:userId/profileForm" element={<ProfileForm setProfile={setProfile} />} />
        <Route path="/:userId/profileForm/educationInput" element={<EducationForm />}/>
        <Route path="/connections" element={<ConnectionList/>}/>
        <Route path="/post" element={<Post />} />
        <Route path="/post/mypost" element={<UserJobs />} />
        <Route path="/post/newjob" element={<NewJob />} />
        <Route path="/post/newevent" element={<EventPost />} />
        <Route path="/post/eventsList" element={<EventsList />} />
        <Route path="/post/poll" element={<PollsPost />} />
        <Route path="/post/media" element={<MediaPost />} />
        <Route path="/post/mypost/:jobId" element={<UpdateJob />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard/appliedJobs" element={<AppliedJobs/>}/>
        <Route path="/dashboard/latestJobs" element={<LatestJobs/>}/>
        <Route path="/dashboard/jobOffers" element={<JobOffers/>}/>
        <Route path="/dashboard/applicants" element={<Applicants/>}/>
        <Route path="/auth/signup" element={<Signup />} />
        <Route
          path="/auth/signup/selectAccountType"
          element={<AccountTypeForm />}
        />
        <Route
          path="/auth/signup/selectAccountType/employee-registration"
          element={<EmployeeRegistrationForm />}
        />
        <Route
          path="/auth/signup/selectAccountType/employer-registration"
          element={<EmployerRegistrationForm />}
        />
        <Route path="/:userId/chat" element={<Chat />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/jobId" element={<ApplicationForm/>}/>
        <Route path="/about" element={<AboutDeveloper/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
