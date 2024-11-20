import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectContacts,
  selectNameFilter,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);

  // const filteredData = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul>
      {[].map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
