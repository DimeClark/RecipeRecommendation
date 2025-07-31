import { Request, Response, NextFunction } from 'express';
interface AppError extends Error {
    statusCode?: number;
    status?: string;
    isOperational?: boolean;
}
declare const errorHandler: (err: AppError, req: Request, res: Response, next: NextFunction) => void;
export default errorHandler;
