import { Request, Response } from 'express';
import SteamAPI from 'type-steamapi';

export interface MyContext {
  req: Request;
  res: Response;
  steam: SteamAPI;
}
