// export const route = {
//   preload() {
//     getUser();
//   }
// } satisfies RouteDefinition;

import { createAsync } from "@solidjs/router";
import { foodQuery } from "~/server/queries";

export default function Home() {
  const food = createAsync(() => foodQuery())
  
  return (
    <>
    {food()?.map(f => {
      return f.name
    })}

    </>
  );
}
