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
        contact,
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

export {
  createContact,
};