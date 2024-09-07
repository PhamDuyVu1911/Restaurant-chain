import express from 'express';

import { passLocals } from '../../app/http/middlewares/admins';
import { adminRoutes } from '../../configs';

import { DashboardController } from '../../app/http/controllers/admins';

const route = express.Router();

const urlAdmin = adminRoutes.url;

// Middleware handle pass local
route.use(passLocals);

route.get('/', DashboardController.index);

export default route;
