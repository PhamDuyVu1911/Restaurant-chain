import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
    res.render('customers/pages/homes/index', {
        title: 'Trang chủ',
        layout: 'customers/layouts/main-layout',
    });
});

export default route;
