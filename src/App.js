import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar-section/Navbar";
import Branches from "./pages/branches/Branches";
import DoctorAppointment from "./pages/doctors-section/doctor-appointment/DoctorAppointment";
import DoctorModal from "./pages/doctors-section/doctorModal/DoctorModal";
import Doctors from "./pages/doctors-section/Doctors";
import Home from "./pages/home/Home";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="branches/:clinicId" element={<Branches />} />
          <Route path="doctors/:branchDoctor" element={<Doctors />} />
          <Route path="doctor-appointment/:doctorid" element={<DoctorAppointment />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
