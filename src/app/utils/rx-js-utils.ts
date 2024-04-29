import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export class SubSink {
  private _subs: Subscription[] = [];

  set sink(value: Subscription) {
    this._subs.push(value);
  }

  unsubscribe() {
    this._subs.forEach(sub => sub?.unsubscribe?.());
  }
}

export class SubjectValue<T> {
  constructor(private _subject: BehaviorSubject<T>) {}

  value(): T {
    return this._subject.getValue();
  }

  value$(): Observable<T> {
    return this._subject.asObservable();
  }
}
