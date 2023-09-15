const environment = {
  production: process.env.REACT_APP_PRODUCTION === 'true',
  baseUrl: 'https://dev-domain-name/api/' // develop Base URL
  // client_id: process.env.REACT_APP_CLIENT_ID as string,
  // client_secret: process.env.REACT_APP_CLIENT_SECRET as string,
};
export default environment;
