import { Request, Response } from 'express';
import UserModelExample from '../models/UserModelExample';

class UserControllerExample {
  // read all data users
  public getAllUsers = (req: Request, res: Response) => {
    console.log("jalan");
    UserModelExample.find().then(users => {
      res.status(200).json({ message: 'Success Read All Users', data: users });
    });
  };
  // create data users
  public createUsers = (req: Request, res: Response) => {
    const crateaUser = new UserModelExample(req.body);
    crateaUser
      .save()
      .then(user => {
        res.status(200).json({ message: 'Success Create User', data: user });
      })
      .catch(err => {
        res.status(500).json({ message: 'Internal Server Error' });
      });
  };
}

export default new UserControllerExample();
