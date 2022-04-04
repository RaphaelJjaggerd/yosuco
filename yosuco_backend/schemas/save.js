export default {
  name: 'save',
  title: 'Save',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'userId',    //User id fo the user who saved the pin
      title: 'UserId',
      type: 'string',
    },
  ],
};