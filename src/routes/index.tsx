// export const route = {
//   preload() {
//     getUser();
//   }
// } satisfies RouteDefinition;

import { createAsync } from "@solidjs/router";
import { createEffect } from "solid-js";
import { foodQuery } from "~/server/queries";

export default function Home() {
  const food = createAsync(() => foodQuery())

  return (
    <>
      {food()?.map(f => <div>
        <span>{f.name}</span>
        {f.ingridients.map(i => <span>{i.ingridientId} {i.amount}</span>)}
      </div>)}

    </>
  );
}
