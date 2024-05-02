import { fetchData } from './fetchUtils.js';

async function getCollections() {
  try {
    const collections = await fetchData('https://biggamesapi.io/api/collections');
    const collectionDataPromises = collections.map(async (collection) => {
      const response = await fetchData(`https://biggamesapi.io/api/collection/${collection}`);
      return response;
    });

    const collectionData = await Promise.all(collectionDataPromises);
    console.log('Data fetched successfully.');
    return collectionData;
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    throw error; // Propagate the error to the caller
  }
}

async function getClans() {
  try {
    const response = await fetchData('https://biggamesapi.io/api/clansList');
    console.log('Data fetched successfully.');
    return [response];
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    throw error; // Propagate the error to the caller
  }
}

export { getCollections, getClans };