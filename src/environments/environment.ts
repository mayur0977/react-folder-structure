const environment = {
  production: process.env.REACT_APP_PRODUCTION === 'true',
  baseUrl: process.env.REACT_APP_BASEURL as string // develop Base URL
  // client_id: process.env.REACT_APP_CLIENT_ID as string,
  // client_secret: process.env.REACT_APP_CLIENT_SECRET as string,
  // payment_application_id: process.env.REACT_APP_PAYMENT_APP_ID as string,
  // payment_location_id: process.env.REACT_APP_PAYMENT_LOCATION_ID as string,
  // gtmId: process.env.REACT_APP_GTM_ID as string
};
export default environment;
