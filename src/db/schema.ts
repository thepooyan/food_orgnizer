import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { primaryKey, sqliteTable } from "drizzle-orm/sqlite-core";

export const ingridientsTable = sqliteTable("ingridients", s => ({
  id: s.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  name: s.text().notNull().unique(),
}));

export type NewIngridient = InferInsertModel<typeof ingridientsTable>;

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

export const foodRelations = relations(foodTable, ({ many }) => ({
	ingridients: many(food_ingridientsTable),
}));

export const ingridientsRelations = relations(ingridientsTable, ({ many }) => ({
	foods: many(food_ingridientsTable),
}));

export const food_ingridientsTableRelations = relations(food_ingridientsTable, ({one}) => ({
  food: one(foodTable, {
    fields: [food_ingridientsTable.foodId],
    references: [foodTable.id]
  }),
  ingridient: one(ingridientsTable, {
    fields: [food_ingridientsTable.ingridientId],
    references: [ingridientsTable.id]
  })
}))