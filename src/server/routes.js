import express from 'express';

import { createContact } from './controllers/contacts';
import { sendMessage } from './controllers/messages';
import { validateNewContact } from './helpers/contactValidations';
import { validateMessage } from './helpers/messageValidations';

const router = express.Router();

router.post('/contact', validateNewContact, createContact);
router.post('/message', validateMessage, sendMessage);

export default router;
