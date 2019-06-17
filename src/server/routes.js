import express from 'express';

import { createContact } from './controllers/contacts';
import { validateNewContact } from './helpers/contactValidations';

const router = express.Router();

router.post('/contact', validateNewContact, createContact);

export default router;
