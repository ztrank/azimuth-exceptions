import { Container } from 'inversify';
import { HttpExceptionConstructors } from './Http Exceptions';
import { HttpExceptions } from './public';

const ExceptionSymbol = Symbol.for('Exception');
export function Bind(container: Container): symbol {
    Object.getOwnPropertyNames(HttpExceptionConstructors).forEach(exp => {
        container.bind((<any>HttpExceptions)[exp]).toConstructor((<any>HttpExceptionConstructors)[exp]);
    });
    return ExceptionSymbol;
}