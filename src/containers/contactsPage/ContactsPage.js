import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    // Check for duplicates whenever the name changes
    const isNameDuplicate = contacts.some((contact) => contact.name === name);
    setIsDuplicate(isNameDuplicate);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for dupliacte names before adding a new contact
    const isDuplicate = contacts.some((contact) => contact.name === name);

    if (!isDuplicate) {
      // Add a new contact
      addContact(name, phone, email);

      // Clear the form on successful submission
      setName("");
      setPhone("");
      setEmail("");
      setIsDuplicate(false);
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
