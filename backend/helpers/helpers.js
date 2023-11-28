const SendResponse = (isSucessful, message, data) => {
  return {
    isSucessful,
    message: isSucessful ? message : "",
    error: !isSucessful ? message : "",
    data,
  };
};

module.exports = { SendResponse };
