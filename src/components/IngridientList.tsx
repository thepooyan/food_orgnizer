import { Accessor, For } from "solid-js"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Ingridient } from "~/db/DataFetching"


interface props {
    ingridients: Accessor<Ingridient[]>
}
const IngridientList = ({ ingridients }:props) => {
  return (
    <div>
        <Table>
            <TableCaption>لیست مواد غذایی</TableCaption>
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

export default IngridientList