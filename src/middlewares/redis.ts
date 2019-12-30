import { Request, Response, NextFunction } from "express";
import redis from "redis";
const client = redis.createClient('https://127.0.0.1:6379');

export default new class Redis {
  public cached = (req: Request, res: Response, next: NextFunction) => {
    let redis_key: any = req.headers.redis_key
    client.get(redis_key, function (err: any, reply: any) {
      if (err) {
        res.status(500).json({
          message: "Somethin Went Wrong"
        })
      }
      if (reply == null) {
        next()
      } else {
        res.status(200).json({
          message: `Success Read ${redis_key}`,
          data: JSON.parse(reply)
        })
      }
    });
  }
  caching = (key: any, data: any) => {
    client.set(key, JSON.stringify(data))
  }
  public delCache = (key: any) => {
    client.del(key)
  }
}