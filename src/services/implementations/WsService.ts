import { IComment } from "../../common/types/api";

export const WS_EVENTS = {
  LIKE_UPDATED: "like_updated",
  COMMENT_ADDED: "comment_added",
} as const;

export type IWsEventType = (typeof WS_EVENTS)[keyof typeof WS_EVENTS];

export interface IWsLikeUpdatedEvent {
  type: typeof WS_EVENTS.LIKE_UPDATED;
  postId: string;
  likesCount: number;
}

export interface IWsCommentAddedEvent {
  type: typeof WS_EVENTS.COMMENT_ADDED;
  postId: string;
  comment: IComment;
}

export type TWsEvent = IWsLikeUpdatedEvent | IWsCommentAddedEvent;

type TWsEventHandler = (event: TWsEvent) => void;

export class WsService {
  private ws: WebSocket | null = null;
  private handlers: Set<TWsEventHandler> = new Set();
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private shouldReconnect = false;
  private readonly url: string;

  constructor(wsBaseUrl: string, token: string) {
    this.url = `${wsBaseUrl}/ws?token=${token}`;
  }

  connect() {
    this.shouldReconnect = true;
    this.openSocket();
  }

  private openSocket() {
    try {
      this.ws = new WebSocket(this.url);

      this.ws.onmessage = (e) => {
        try {
          const event = JSON.parse(e.data as string);
          if (event.type === WS_EVENTS.LIKE_UPDATED || event.type === WS_EVENTS.COMMENT_ADDED) {
            this.handlers.forEach((h) => h(event as TWsEvent));
          }
        } catch {
          // ignore malformed messages
        }
      };

      this.ws.onclose = () => {
        if (this.shouldReconnect) {
          this.reconnectTimer = setTimeout(() => this.openSocket(), 3000);
        }
      };

      this.ws.onerror = () => {
        // onerror is always followed by onclose, reconnect is handled there
      };
    } catch {
      if (this.shouldReconnect) {
        this.reconnectTimer = setTimeout(() => this.openSocket(), 3000);
      }
    }
  }

  subscribe(handler: TWsEventHandler): () => void {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  disconnect() {
    this.shouldReconnect = false;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.ws?.close();
    this.ws = null;
  }
}
