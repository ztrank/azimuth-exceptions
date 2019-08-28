import 'reflect-metadata';
import { HttpExceptions } from '../src/public';
import { Bind } from '../src/Bind';
import { Container } from 'inversify';

test('Bind', () => {
    const container = new Container();
    const exceptionSymbol = Bind(container);
    expect(container.isBound(exceptionSymbol));

    Object.getOwnPropertyNames(HttpExceptions).forEach(exceptionName => {
        expect(container.isBoundNamed(exceptionSymbol, exceptionName));
    });
})