import axios from '../api'

const ImportProduct = {
    async getImportProduct(searchQuery = '') {
        try {
            const response = await axios.get(`/main/import-products/?${searchQuery}&order_by=-created_at`);
            return {
                results: response.data.results,
                count: response.data.count
            };
        } catch (error) {
            throw error.response || new Error('Unknown error');
        }
    },
}

export default ImportProduct
