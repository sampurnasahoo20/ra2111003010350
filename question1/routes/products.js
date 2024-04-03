const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:companyname/categories/:categoryname/products', async (req, res) => {
    try {
        const { companyname, categoryname } = req.params;
        const { top, minPrice, maxPrice } = req.query;
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU4MDMwLCJpYXQiOjE3MTIxNTc3MzAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA1ODY3NDQ1LWE3NWQtNDQ5Yi1iYjZhLTNiYzA4NjQ5YjRhOSIsInN1YiI6InNkOTcxMUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoic3JtaXN0IiwiY2xpZW50SUQiOiIwNTg2NzQ0NS1hNzVkLTQ0OWItYmI2YS0zYmMwODY0OWI0YTkiLCJjbGllbnRTZWNyZXQiOiJHb0ZuSnVWRHBQemVuSEVHIiwib3duZXJOYW1lIjoic2FtcHVybmEgc2Fob28iLCJvd25lckVtYWlsIjoic2Q5NzExQHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJyYTIxMTEwMDMwMTAzNTAifQ.GZGLj7cJrvyd8coCaO3Yp2V_BioNQ9oR5W1gmbBrvTw';
        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:companyname/categories/:categoryname/products/:productid', async (req, res) => {
    try {
        const { companyname, categoryname, productid } = req.params;
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU4MDMwLCJpYXQiOjE3MTIxNTc3MzAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA1ODY3NDQ1LWE3NWQtNDQ5Yi1iYjZhLTNiYzA4NjQ5YjRhOSIsInN1YiI6InNkOTcxMUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoic3JtaXN0IiwiY2xpZW50SUQiOiIwNTg2NzQ0NS1hNzVkLTQ0OWItYmI2YS0zYmMwODY0OWI0YTkiLCJjbGllbnRTZWNyZXQiOiJHb0ZuSnVWRHBQemVuSEVHIiwib3duZXJOYW1lIjoic2FtcHVybmEgc2Fob28iLCJvd25lckVtYWlsIjoic2Q5NzExQHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJyYTIxMTEwMDMwMTAzNTAifQ.GZGLj7cJrvyd8coCaO3Yp2V_BioNQ9oR5W1gmbBrvTw';
        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;