export const getAdd = state => state.phonebook.contacts;

export const getFilter = state => state.phonebook.filter;

export const getVisibleContacts = state => {
  const contacts = getAdd(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
};
