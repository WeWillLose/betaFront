import { Notify } from 'quasar'

export interface INotify{
  showNegative(message: string): void;
  showPositive(message: string): void;
}

class NotifyApi implements INotify {
  showNegative(message: string): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
    Notify.create({type:'negative',message:message})
  }

  showPositive(message: string): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    Notify.create({type:'positive',message:message})
  }
}

const notifyApi = new NotifyApi()

export default notifyApi;
