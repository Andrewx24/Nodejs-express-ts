import axios from 'axios';

const Google = axios.get('https://www.google.com')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.error('Error fetching data from Google:', err);
  });

export default Google;
