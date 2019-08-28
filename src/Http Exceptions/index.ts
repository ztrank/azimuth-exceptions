import { InternalServerException } from './Interal.Server.Exception';
import { NotImplementedException } from './Not.Implemented.Exception';
import { BadRequestException } from './Bad.Request.Exception';
import { ForbiddenException } from './Forbidden.Exception';
import { UnsupportedMediaTypeException } from './Unsupported.Media.Type.Exception';
import { UnauthorizedException } from './Unauthorized.Exception';
import { NotFoundException } from './Not.Found.Exception';

export const HttpExceptionConstructors = Object.freeze({
    InternalServerException: InternalServerException,
    NotImplementedException: NotImplementedException,
    BadRequestException: BadRequestException,
    ForbiddenException: ForbiddenException,
    UnsupportedMediaTypeException: UnsupportedMediaTypeException,
    UnauthorizedException: UnauthorizedException,
    NotFoundException: NotFoundException
});