import { primaryKey, sqliteTable } from "drizzle-orm/sqlite-core";

export const foodTable = sqliteTable("food", s => ({
  id: s.integer().primaryKey({ autoIncrement: true }).notNull(),
  name: s.text().notNull(),
  ingridients: s.integer().references(() => ingridientsTable.id)
}));

export const ingridientsTable = sqliteTable("ingridients", s => ({
  id: s.integer().primaryKey({ autoIncrement: true }).notNull(),
  name: s.text().notNull(),
}));

export const food_ingridientsTable = sqliteTable("food_ingridients", s => ({
  foodId: s.integer().references(() => foodTable.id).notNull(),
  ingridientId: s.integer().references(() => ingridientsTable.id).notNull(),
  amount: s.text()
}), 
(table) => [
  primaryKey({columns: [table.foodId, table.ingridientId]})
]
)