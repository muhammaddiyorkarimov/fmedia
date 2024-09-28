import axios from '../api'

const LandingService = {
    async getNavbar() {
        try {
            const response = await axios.get(`/categories/`);
            return {
                results: response.data.results,
                count: response.data.count
            };
        } catch (error) {
            throw error.response || new Error('Unknown error');
        }
    },
    // async getNavbar(searchQuery = '') {
    //     try {
    //         const response = await axios.get(`/main/import-products/?${searchQuery}&order_by=-created_at`);
    //         return {
    //             results: response.data.results,
    //             count: response.data.count
    //         };
    //     } catch (error) {
    //         throw error.response || new Error('Unknown error');
    //     }
    // },
}

export default LandingService
