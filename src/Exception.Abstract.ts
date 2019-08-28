import { injectable } from 'inversify';

@injectable()
export abstract class ExceptionAbst extends Error {
    public constructor(
        public readonly status: number,
        name: string,
        message?: string,
        public readonly details?: any
    ) {
        super(message);
        this.name = name;
    }
}