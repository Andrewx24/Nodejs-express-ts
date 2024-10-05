import axios from 'axios';

async function fetchGoogleMetadata() {
  try {
    const response = await axios.get('https://www.google.com', {
      validateStatus: () => true, // This allows us to get metadata even if we get a redirect
    });
    
    const metadata = {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      contentType: response.headers['content-type'],
      server: response.headers['server'],
      date: response.headers['date'],
      contentLength: response.headers['content-length'],
    };

    return metadata;
  } catch (error) {
    console.error('Error fetching metadata from Google:', error);
    throw error;
  }
}

export default fetchGoogleMetadata;