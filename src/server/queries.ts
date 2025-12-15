"use server"

import { query } from "@solidjs/router"
import { db } from "~/db"

export const foodQuery = query(async () => {
    return db.query.foodTable.findMany()
}, "food")