import { Message } from '../models';

const sendMessage = async (request, response) => {
  try {
    const messageDetails = await Message.create(request.body);

    response.status(201).json({
      messageDetails,
      success: true,
      message: 'Message sent successfully',
    });
  } catch(error) {
    response.status(500).json({
      success: false,
      error
    });
  }
};

export {
  sendMessage,
};