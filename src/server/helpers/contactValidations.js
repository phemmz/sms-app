import isEmpty from 'lodash/isEmpty';

const validateNewContact = (request, response, next) => {
  try {
    const contactDetails = request.body;
    const errors = {};
    if (!contactDetails.name) {
      errors.name = 'Contact name field can not be empty';
    }

    if (contactDetails.name && !contactDetails.name.trim()) {
      errors.name = 'Contact name field can not be empty';
    }

    if (!contactDetails.phoneNumber) {
      errors.phoneNumber = 'Phone number field can not be empty';
    }

    if (contactDetails.phoneNumber && !contactDetails.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number field can not be empty';
    }

    if (contactDetails.phoneNumber && contactDetails.phoneNumber.trim().length !== 11) {
      errors.phoneNumber = 'Phone number must be 11 digits';
    }

    if (isEmpty(errors)) {
      next();
    } else {
      response.status(422).json({
        success: false,
        errors
      });
    }
  } catch(error) {
    response.status(500).json({
      success: false,
      message: 'Server error, please try again!',
      error
    });
  }
};

export {
  validateNewContact
};