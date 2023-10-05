import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { AppCont } from './../App.styled';
import { createContactAction, deleteContact } from 'redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const {contacts} = useSelector((store) => store.contacts)
  const { filter } = useSelector(store => store.filter);
  const dispatch = useDispatch()
  
  const createPerson = inputValues => {
    dispatch(createContactAction(inputValues));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id))
  };

  const getFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <AppCont>
      <h1>Phonebook</h1>
      <ContactForm createPerson={createPerson} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </AppCont>
  );
}

export default App