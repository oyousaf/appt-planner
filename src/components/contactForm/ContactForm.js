import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      {isDuplicate && <p className="error">Name is already in use</p>}
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="\+[0-9]{1,4}\s?[0-9]{1,15}"
          placeholder="Format: +44 20 7946 0958"
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};
