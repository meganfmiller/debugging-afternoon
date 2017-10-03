import axios from 'axios';

export default function getProducts() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}

