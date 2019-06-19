import express from 'express';

import {
  createContact,
  getAllContacts,
  getContactByPhoneNumber,
  getContactMessages,
  deleteContact
} from './controllers/contacts';
import { sendMessage } from './controllers/messages';
import { validateNewContact } from './helpers/contactValidations';
import { validateMessage } from './helpers/messageValidations';

const router = express.Router();

router.get('/contacts', getAllContacts);
router.get('/contacts/:phoneNumber', getContactByPhoneNumber);
router.post('/contact', validateNewContact, createContact);
router.post('/message', validateMessage, sendMessage);
router.get('/messages/:messageStatus/:phoneNumber', getContactMessages);
router.delete('/contact/:phoneNumber', deleteContact);

export default router;
