import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import { fetchContacts } from 'redux/operations';

export const App = () => {


    return (
    <>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm />
    <h2 className={css.title}>Contacts</h2>
    <Filter />
    <ContactList  />
 </>
);
}

