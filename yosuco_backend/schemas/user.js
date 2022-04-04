// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'user',
  title: 'User',    //title of our schema/model
  type: 'document',
  fields: [             // Fields of the document
    {
      name: 'userName',   //Name of the field
      title: 'UserName',  //title of the field
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
  ],
};