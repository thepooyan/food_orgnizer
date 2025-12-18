// export const route = {
//   preload() {
//     getUser();
//   }
// } satisfies RouteDefinition;

import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import FoodList from "~/components/FoodList";
import IngridientList from "~/components/IngridientList";
import { foodQuery, ingridientsQuery } from "~/server/queries";

export default function Home() {
  const food = createAsync(() => foodQuery())
  const ing = createAsync(() => ingridientsQuery())

  return (
    <div class="p-10 grid grid-cols-2">
      <Show when={food()}>
        {i => <FoodList ingridients={i}/>}
      </Show>
      <Show when={ing()}>
        {i => <IngridientList ingridients={i}/>}
      </Show>
    </div>
  );
}
