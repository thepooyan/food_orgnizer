import { Accessor, For } from "solid-js"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Food } from "~/db/DataFetching"


interface props {
    ingridients: Accessor<Food[]>
}
const FoodList = ({ ingridients }:props) => {
  return (
    <div>
        <Table class="max-w-xl">
            <TableCaption>لیست غذا</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>نام</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <For each={ingridients()}>
                {(i) => (
                    <TableRow>
                    <TableCell>{i.name}</TableCell>
                    </TableRow>
                )}
                </For>
            </TableBody>
        </Table>
    </div>
  )
}

export default FoodList