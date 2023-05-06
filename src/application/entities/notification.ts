import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private Props: NotificationProps;

  constructor(
    Props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.Props = {
      ...Props,
      createdAt: Props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.Props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.Props.recipientId;
  }

  public set content(content: Content) {
    this.Props.content = content;
  }

  public get content(): Content {
    return this.Props.content;
  }

  public set category(category: string) {
    this.Props.category = category;
  }

  public get category(): string {
    return this.Props.category;
  }

  public read() {
    this.Props.readAt = new Date();
  }

  public unread() {
    this.Props.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.Props.readAt;
  }

  public cancel() {
    this.Props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.Props.canceledAt;
  }

  public get createdAt(): Date {
    return this.Props.createdAt;
  }
}

/* const notification = new Notification({
  content: 'uhauioah',
  category: 'uihdufh',
});
 */
