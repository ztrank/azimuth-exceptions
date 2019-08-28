import { ExceptionAbst } from '../Exception.Abstract';
import { HttpExceptionCodes, HttpExceptionNames } from '../public/Http.Exceptions';

export class NotFoundException extends ExceptionAbst {
    public constructor(message?: string, details?: any) {
        super(HttpExceptionCodes.NotFoundException, HttpExceptionNames.NotFoundException, message, details);
    }
}