import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const foodTable = sqliteTable("food", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});
