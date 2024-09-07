const baseUrlAdmin = '/quan-tri';
const adminRoutes = {
    base: baseUrlAdmin,
    url: {
        home: {
            path: `/`,
            child: {
                index: '/',
            },
        },
        user: {
            path: `/nhan-vien`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
                checkEmail: '/kiem-tra-email',
            },
        },
        customer: {
            path: `/khach-hang`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
            },
        },
        contact: {
            path: `/lien-he`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
            },
        },
        evaluate: {
            path: `/danh-gia`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                confirm: `/:id/xac-nhan`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
            },
        },
        product: {
            path: `/san-pham`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
            },
        },
        category: {
            path: `/danh-muc`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
            },
        },
        brand: {
            path: `/hang`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
            },
        },
        promotion: {
            path: `/ma-giam-gia`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
            },
        },
        order: {
            path: `/don-hang`,
            child: {
                index: '/',
                create: `/tao-moi`,
                getAll: `/danh-sach`,
                find: `/:id`,
                confirm: `/:id/xac-nhan`,
                cancel: `/:id/huy`,
                detail: `/xem-chi-tiet/:slug`,
                update: `/:id/cap-nhat`,
                delete: `/:id`,
            },
        },
    },
};

const baseUrlCustomer = '/';
const customerRoutes = {
    base: baseUrlCustomer,
    home: { index: `${baseUrlCustomer}` },
};

const session = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
};

export { session, adminRoutes, customerRoutes };
