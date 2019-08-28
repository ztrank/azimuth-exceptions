import 'reflect-metadata';
import { HttpExceptionConstructors } from '../src/Http Exceptions';
import { Exception, HttpExceptionNames, HttpExceptionCodes } from '../src/public';

test('Test Constructors', () => {
    Object.getOwnPropertyNames(HttpExceptionConstructors).forEach(exp => {
        const exception = <Exception> new (<any>HttpExceptionConstructors)[exp]('Message', {key: 'value'});
        expect(exception.name).toBe((<any>HttpExceptionNames)[exp]);
        expect(exception.status).toBe((<any>HttpExceptionCodes)[exp]);
        expect(exception.message).toBe('Message');
        expect(exception.details).toBeDefined();
        expect(exception.details.key).toBe('value');
    });
})