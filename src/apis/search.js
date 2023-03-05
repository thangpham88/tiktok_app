import * as request from '~/utils/request';

const searchService = async (query, type = 'less') => {
  try {
    const response = await request.get('users/search', {
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
export default searchService;
