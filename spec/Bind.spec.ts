import 'reflect-metadata';
import { HttpExceptions } from '../src/public';
import { BindExceptions } from '../src/Bind';
import { Container } from 'inversify';

test('Bind', () => {
    const container = new Container();
    BindExceptions(container);

    Object.getOwnPropertyNames(HttpExceptions).forEach(exceptionName => {
        expect(container.isBound(exceptionName));
    });
})