import { db } from "~/db"

export type DbListEntity<T extends (() => Promise<any[]>)> = Awaited<
    ReturnType<T>
>[number]

export const getFoods = () => db.query.foodTable.findMany({with: {ingridients: true}})
export type Food = DbListEntity<typeof getFoods>

export const getIngridients = () => db.query.ingridientsTable.findMany()
export type Ingridient = DbListEntity<typeof getIngridients>