import { adminRoutes as routes } from "../../../../configs";

function passLocals(req, res, next) {
  const pathUrls = req.originalUrl.split("/");
  const currentUrl = pathUrls[2] ? pathUrls[2] : "/";

  const menu = [
    {
      path: routes.url.home.path,
      title: "Phân tích",
      icon: `fa-solid fa-chart-line`,
      isActive: routes.url.home.path === currentUrl,
    },
    {
      path: routes.url.user.path,
      title: "Quản lý bàn ăn",
      icon: `fa fa-id-badge`,
      tag: "Quản trị",
      isActive: routes.url.user.path === "/" + currentUrl,
    },
    {
      path: routes.url.customer.path,
      title: "Quản lý khách hàng",
      icon: `fa fa-users`,
      tag: "Quản trị",
      isActive: routes.url.customer.path === "/" + currentUrl,
    },
    {
      path: routes.url.evaluate.path,
      title: "Mã giảm giá",
      icon: `fa-regular fa-thumbs-up`,
      tag: "Quản trị",
      isActive: routes.url.evaluate.path === "/" + currentUrl,
    },
    {
      path: routes.url.contact.path,
      title: "Cài đặt",
      icon: `fa-solid fa-address-card`,
      tag: "Quản trị",
      isActive: routes.url.contact.path === "/" + currentUrl,
    },
    {
      path: routes.url.product.path,
      title: "Quản lý món ăn",
      icon: `fa fa-shopping-cart`,
      tag: "Sản phẩm",
      isActive: routes.url.product.path === "/" + currentUrl,
    },
    {
      path: routes.url.category.path,
      title: "Quản lý danh mục",
      icon: `fa-solid fa-clipboard-list`,
      tag: "Sản phẩm",
      isActive: routes.url.category.path === "/" + currentUrl,
    },
    {
      path: routes.url.brand.path,
      title: "Đặt món ăn",
      icon: `fa-solid fa-city`,
      tag: "Đặt bàn",
      isActive: routes.url.brand.path === "/" + currentUrl,
    },
    {
      path: routes.url.order.path,
      title: "Quản lý hoá đơn",
      icon: `fa-solid fa-truck`,
      tag: "Hoá đơn sổ sách",
      isActive: routes.url.order.path === "/" + currentUrl,
    },
  ];

  res.locals.menu = menu;
  res.locals.baseUrl = routes.base;
  res.locals.currentUrl = currentUrl;
  // Get user in session
  res.locals.user = [];
  next();
}

export default passLocals;
