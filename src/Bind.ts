import { Container } from 'inversify';
import { HttpExceptionConstructors } from './Http Exceptions';
import { HttpExceptions } from './public';

export function BindExceptions(container: Container): void {
    Object.getOwnPropertyNames(HttpExceptionConstructors).forEach(exp => {
        container.bind((<any>HttpExceptions)[exp]).toConstructor((<any>HttpExceptionConstructors)[exp]);
    });
}