// environment variable containing the api prefix. example: https://app.contoso.com/{api-prefix}/{endpoint}
const API = process.env.REACT_APP_API || 'api';

export { API as default };
