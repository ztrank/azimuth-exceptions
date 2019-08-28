import { ExceptionAbst } from '../Exception.Abstract';
import { HttpExceptionCodes, HttpExceptionNames } from '../public/Http.Exceptions';

export class UnsupportedMediaTypeException extends ExceptionAbst {
    public constructor(message?: string, details?: any) {
        super(HttpExceptionCodes.UnsupportedMediaTypeException, HttpExceptionNames.UnsupportedMediaTypeException, message, details);
    }
}