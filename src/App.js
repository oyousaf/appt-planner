import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // define state variablees for contacts and appointment
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Callback function to add a new contact
  const addContact = (name, number, email) => {
    const newContact = { name, number, email };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Callback function to add a new appt
  const addAppt = (name, contact, date, time) => {
    const newAppt = { name, contact, date, time };
    setAppointments((prevAppointments) => [...prevAppointments, newAppt]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppt={addAppt}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
