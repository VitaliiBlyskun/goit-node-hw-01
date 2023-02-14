// const fs = require("fs").promises;
// const contactsPath = require("./filePath");
// const { v4 } = require("uuid");

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   const contacts = JSON.parse(data);
//   return contacts;
// };

// const getContactById = async (contactId) => {
//   const contact = await listContacts();
//   const result = contact.find((contact) => contact.id === contactId);
//   if (!result) {
//     return null;
//   }
//   return result;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((contact) => contact.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   const [removeContactById] = contacts.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts));
//   return removeContactById;
// };

// const addContact = async (name, email, phone) => {
//   const contacts = await listContacts();
//   const newContact = { ...{ name, email, phone, id: v4() } };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts));
//   return newContact;
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// };


////////////////////////////////////////////////

const fs = require("fs").promises;
const contactsPath = require("./filePath");
const { v4 } = require("uuid");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error.message)
  }
};

const getContactById = async (contactId) => {
try {
  const contact = await listContacts();
  const result = contact.find((contact) => contact.id === contactId);
  if (!result) {
    return null;
  }
  return result;
} catch (error) {
  console.log(error.message)
}


};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const [removeContactById] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return removeContactById;
  } catch (error) {
    console.log(error.message)
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { ...{ name, email, phone, id: v4() } };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};