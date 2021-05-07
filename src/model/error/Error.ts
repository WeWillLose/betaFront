export interface IError {
  message: string
  object?: unknown
}
export class ErrorImpl implements IError {

  private readonly _message: string

  private readonly _object: unknown

  get message(): string {
    return this._message;
  }

  get object(): unknown {
    return this._object;
  }

  constructor(message: string, object?: unknown) {
    this._message = message
    this._object = object
  }
}
