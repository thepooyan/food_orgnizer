// export const route = {
//   preload() {
//     getUser();
//   }
// } satisfies RouteDefinition;

import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import IngridientList from "~/components/IngridientList";
import { foodQuery, ingridientsQuery } from "~/server/queries";

export default function Home() {
  const food = createAsync(() => foodQuery())
  const ing = createAsync(() => ingridientsQuery())

  return (
    <>
      <Show when={food()}>
        {i => <IngridientList ingridients={i}/>}
      </Show>
      {/* <Show when={ing()}>
        {i => <IngridientList ingridients={i}/>}
      </Show> */}
    </>
  );
}
