"use server"

import { query } from "@solidjs/router"
import { getFoods, getIngridients } from "~/db/DataFetching"

export const foodQuery = query(async () => {
    return getFoods()
}, "food")

export const ingridientsQuery = query(async () => {
    return getIngridients()
}, "food")
