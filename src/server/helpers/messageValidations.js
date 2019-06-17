import isEmpty from 'lodash/isEmpty';

const validateMessage = (request, response, next) => {
  try {
    const { message, senderId, receiverId } = request.body;
    const errors = {};
    if (!message) {
      errors.message = 'Message field can not be empty';
    }

    if (message && !message.trim()) {
      errors.message = 'Message field can not be empty';
    }

    if (!senderId) {
      errors.senderId = 'SenderId field can not be empty';
    }

    if (senderId && !senderId.trim()) {
      errors.senderId = 'SenderId field can not be empty';
    }

    if (!receiverId) {
      errors.receiverId = 'ReceiverId field can not be empty';
    }

    if (receiverId && !receiverId.trim()) {
      errors.receiverId = 'ReceiverId field can not be empty';
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
  validateMessage
};
