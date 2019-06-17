import { Contact } from '../models';

const createContact = async (request, response) => {
  try {
    const [contact, created] = await Contact.findOrCreate({ where: request.body });
    
    if (created) {
      response.status(201).json({
        contact,
        success: true,
        message: 'Contact created successfully',
      });
    } else {
      response.status(409).json({
        success: false,
        message: 'Contact already exist',
      });
    }
  } catch(error) {
    response.status(500).json({
      success: false,
      error
    });
  }
};

const getAllContacts = async (_, response) => {
  try {
    const contacts = await Contact.findAll();

    if (contacts.length) {
      response.status(200).json({
        contacts,
        success: true,
        message: 'Contacts retrieved',
      });
    } else {
      response.status(404).json({
        contacts,
        success: true,
        message: 'No contact found',
      });
    }
  } catch(error) {
    response.status(500).json({
      error,
      success: false,
      message: 'Failed to get all contacts',
    });
  }
}

const getContactByPhoneNumber = async (request, response) => {
  try {
    const { phoneNumber } = request.params;

    if (phoneNumber.length !== 11) {
      return response.status(422).json({
        success: false,
        message: 'Phone number must be 11 digits'
      });
    } 

    const contact = await Contact.findOne({
      where: {
        phoneNumber
      }
    });

    if (contact === null) {
      return response.status(404).json({
        contact,
        success: true,
        message: 'Contact not found',
      });
    }

    return response.status(200).json({
      contact,
      success: true,
      message: 'Contact retrieved',
    });
  } catch(error) {
    response.status(500).json({
      error,
      success: false,
      message: 'Failed to get contact',
    });
  }
}

export {
  createContact,
  getAllContacts,
  getContactByPhoneNumber
};