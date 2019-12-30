import BaseRouterExample from './BaseRouterExample';
import Redis from "../middlewares/redis";
// import controller
import UserControllerExample from '../controllers/UserControllerExample';

class UserRouterExample extends BaseRouterExample {
  public routes(): void {
    this.router.get('/', Redis.cached, UserControllerExample.getAllUsers);
    this.router.post('/', UserControllerExample.createUsers);
  }
}

export default new UserRouterExample().router;
