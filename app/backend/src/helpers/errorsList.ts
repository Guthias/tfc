const errorList = {
  missingFields: {
    status: 400,
    message: 'All fields must be filled',
  },

  incorrectCredentials: {
    status: 401,
    message: ''
  }
}

export default errorList;
