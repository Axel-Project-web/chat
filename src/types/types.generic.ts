//for each message
interface MessageType {
  message: string;
  username: string;
}

type MessagesType = Array<MessageType>;

export type {
  MessageType,
  MessagesType,
}