import axios from 'axios';


axios.get('www.google.com').then((res) => {
  console.log(res.data);
})


export default axios;