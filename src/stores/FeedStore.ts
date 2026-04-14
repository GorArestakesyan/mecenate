import { makeAutoObservable } from "mobx";

/** Reserved for future feed UI state (scroll position, modal visibility, etc.) */
export class FeedStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const feedStore = new FeedStore();
