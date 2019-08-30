import { ContainerModule } from 'inversify';
import { HttpExceptionConstructors } from './Http Exceptions';
import { HttpExceptions } from './public';


export const ExceptionModule = new ContainerModule(bind => {
    Object.getOwnPropertyNames(HttpExceptionConstructors).forEach(exp => {
        bind((<any>HttpExceptions)[exp]).toConstructor((<any>HttpExceptionConstructors)[exp]);
    });
});