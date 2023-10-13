import axios from "axios";

const apiUrl = 'https://www.jsonkeeper.com/b/MDXW';

export const FetchMenuItems = async () => {
    try {
        let axiosCall = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        return axiosCall.data;
    } catch (error) {
        console.error('Error fetching menu items:', error);
        throw error;
    }
};