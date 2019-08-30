import 'reflect-metadata';
import { HttpExceptions } from '../src/public';
import { ExceptionModule } from '../src/Exception.Module';
import { Container } from 'inversify';

test('Bind', () => {
    const container = new Container();
    container.load(ExceptionModule);

    Object.getOwnPropertyNames(HttpExceptions).forEach(exceptionName => {
        expect(container.isBound(exceptionName));
    });
})