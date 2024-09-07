class DashboardController {
    // [GET] /admin/dashboard
    index(req, res) {
        res.render('admins/pages/dashboard/index', {
            layout: 'admins/layouts/main-layout',
            title: 'Dashboard',
        });
    }
}

export default new DashboardController();
