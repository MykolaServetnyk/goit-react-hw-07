import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { getContacts } from '../../redux/contactsSlice'
import {getSearchQuery } from "../../redux/filtersSlice";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(getContacts);

  const valueSearch = useSelector(getSearchQuery);

  const visibleContacts = contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(valueSearch.name.toLowerCase())
  );

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contacts) => (
        <Contact key={contacts.id} contacts={contacts} />
        ))}
      </ul>
    </>
  );
}