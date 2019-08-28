import { ExceptionAbst } from '../Exception.Abstract';
import { HttpExceptionCodes, HttpExceptionNames } from '../public/Http.Exceptions';

export class UnauthorizedException extends ExceptionAbst {
    public constructor(message?: string, details?: any) {
        super(HttpExceptionCodes.UnauthorizedException, HttpExceptionNames.UnauthorizedException, message, details);
    }
}