export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true,
  },
  {
    key: 'user',
    types: ['boolean'],
    required: true,
  },
  {
    key: 'trigger',
    types: ['string', 'number', 'function'],
    required: false,
  },
  {
    key: 'validator',
    types: ['function'],
    required: false,
  },
  {
    key: 'end',
    types: ['boolean'],
    required: false,
  },
  {
    key: 'inputType',
    types: ['string'],
    require: true,
  },
  {
    key: 'pattern',
    types: ['string'],
    require: false,
  }
];
