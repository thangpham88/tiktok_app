import * as httpRequest from '~/utils/httpRequest';

const search = async (query, type = 'less') => {
  try {
    const response = await httpRequest.get('users/search', {
      params: {
        q: query,
        type: type,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default search;
