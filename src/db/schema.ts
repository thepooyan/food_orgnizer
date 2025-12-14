import { primaryKey, sqliteTable } from "drizzle-orm/sqlite-core";

export const ingridientsTable = sqliteTable("ingridients", s => ({
  id: s.integer({ mode: "number" }).primaryKey({ autoIncrement: true }).notNull(),
  name: s.text().notNull(),
}));

export const foodTable = sqliteTable("food", s => ({
  id: s.integer({ mode: "number" }).primaryKey({ autoIncrement: true }).notNull(),
  name: s.text().notNull(),
}));


export const food_ingridientsTable = sqliteTable("food_ingridients", s => ({
  foodId: s.integer({mode: "number"}).references(() => foodTable.id).notNull(),
  ingridientId: s.integer({mode: "number"}).references(() => ingridientsTable.id).notNull(),
  amount: s.text()
}), 
(table) => [
  primaryKey({columns: [table.foodId, table.ingridientId]})
]
)