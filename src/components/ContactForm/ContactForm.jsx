import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'
import { addContact} from "redux/contactsSlice";
import {getContacts} from 'redux/selectors'


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
        e.preventDefault();
        let contactId = nanoid();
        const form = e.target;
        const contact = {name: form.elements.name.value, number: form.elements.number.value, id: contactId};

        for (const item of contacts) {
          if (item.name === contact['name']) {
            alert(`${contact.name} is already in contacts.`);
            return
          }
        }

        dispatch(addContact(contact));
        form.reset();
      }

        return (
    <form onSubmit={handleSubmit} className={css.form}>
    <label htmlFor='name' className={css.formLabel}> Name
    <input 
    className={css.formInput}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    />
    </label>
    <label htmlFor="tel" className={css.formLabel}> Number
    <input 
    className={css.formInput}
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    />
    </label>
    <button type='submit' className={css.btn}> Add contact</button>
    </form>
    )
    }


export default ContactForm;

