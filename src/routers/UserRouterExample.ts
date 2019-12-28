import BaseRouterExample from './BaseRouterExample';

// import controller
import UserControllerExample from '../controllers/UserControllerExample';

class UserRouterExample extends BaseRouterExample {
  public routes(): void {
    this.router.get('/', UserControllerExample.getAllUsers);
    this.router.post('/', UserControllerExample.createUsers);
  }
}

export default new UserRouterExample().router;
