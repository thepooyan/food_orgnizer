"use server"

import { query } from "@solidjs/router"
import { db } from "~/db"

const getFoods = () => db.query.foodTable.findMany({with: {ingridients: true}})
export type Food = Awaited<typeof getFoods>
export const foodQuery = query(async () => {
    return getFoods()
}, "food")
