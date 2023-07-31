import React from "react";
import { BehaviorSubject, Subject, take, takeWhile } from "rxjs";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { filter } from "rxjs/internal/operators/filter";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { tap } from "rxjs/internal/operators/tap";

export default function PlaygroundComponent() {
  let num = 0;
  const subject = new Subject<number>();

  subject
    .pipe(
      distinctUntilChanged(),
      filter((asd) => asd < 4),
      tap((asd) => {
        console.log(asd);
      })
    )
    .subscribe();
  const event = () => {
    subject.next(++num);
  };

  const event2 = () => {
    subject.next(--num);
  };

  const event3 = () => {
    subject.next(num);
  };

  return (
    <div style={{ background: "white", width: "100%", height: "500px" }}>
      <div>szia pety szívecske</div>
      <button onClick={event}>click me</button>
      <button onClick={event2}>click me 2</button>
      <button onClick={event3}>click me 3</button>
    </div>
  );
}
