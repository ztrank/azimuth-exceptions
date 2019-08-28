import { Container } from 'inversify';
import { HttpExceptionConstructors } from './Http Exceptions';
import { HttpExceptions } from './public';

const ExceptionSymbol = Symbol.for('Exception');
export function Bind(container: Container): symbol {
    Object.getOwnPropertyNames(HttpExceptionConstructors).forEach(exp => {
        container.bind(ExceptionSymbol).to((<any>HttpExceptionConstructors)[exp]).whenTargetNamed((<any>HttpExceptions)[exp]);
    });
    return ExceptionSymbol;
}