import { primaryKey, sqliteTable } from "drizzle-orm/sqlite-core";

export const ingridientsTable = sqliteTable("ingridients", s => ({
  id: s.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  name: s.text().notNull().unique(),
}));

export const foodTable = sqliteTable("food", s => ({
  id: s.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  name: s.text().notNull().unique(),
}));


export const food_ingridientsTable = sqliteTable("food_ingridients", s => ({
  foodId: s.integer({mode: "number"}).references(() => foodTable.id),
  ingridientId: s.integer({mode: "number"}).references(() => ingridientsTable.id),
  amount: s.text().notNull()
}), 
(table) => [
  primaryKey({columns: [table.foodId, table.ingridientId]})
]
)