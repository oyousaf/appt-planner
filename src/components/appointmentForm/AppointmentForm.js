import React from "react";

const getTodayString = () => {
  const today = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const [month, day, year] = new Intl.DateTimeFormat(undefined, options)
    .format(today)
    .split("/");
  return `${year}-${month}-${day}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <label>
        Contact:
        <select
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a contact
          </option>
          {contacts.map((contact, index) => (
            <option key={index} value={contact.id}>
              {contact.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Appointment</button>
    </form>
  );
};
