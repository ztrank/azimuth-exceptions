import { ExceptionAbst } from '../Exception.Abstract';
import { HttpExceptionCodes, HttpExceptionNames } from '../public/Http.Exceptions';

export class InternalServerException extends ExceptionAbst {
    public constructor(message?: string, details?: any) {
        super(HttpExceptionCodes.InternalServerException, HttpExceptionNames.InternalServerException, message, details);
    }
}