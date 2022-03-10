module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0b5104d000ac83d357809adcb16ca422'),
  },
});
