import { ExceptionAbst } from '../Exception.Abstract';
import { HttpExceptionCodes, HttpExceptionNames } from '../public/Http.Exceptions';

export class BadRequestException extends ExceptionAbst {
    public constructor(message?: string, details?: any) {
        super(HttpExceptionCodes.BadRequestException, HttpExceptionNames.BadRequestException, message, details);
    }
}