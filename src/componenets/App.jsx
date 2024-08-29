import { useEffect, useState } from "react";
import ContactForm from "../componenets/ContactForm/ContactForm";
import ContactList from "../componenets/ContactList/ContactList";
import SearchBox from "../componenets/SearchBox/SearchBox";
import initialContacts from "../contacts.json";
import * as Yup from "yup";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (data, actions) => {
    addContact({
      id: Date.now(),
      name: data.name,
      number: data.number,
    });
    actions.resetForm();
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    number: Yup.string()
      .required("Required")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        initialValues={initialValues}
        addContact={addContact}
        handleSubmit={handleSubmit}
        registerSchema={registerSchema}
      />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </>
  );
};

export default App;
