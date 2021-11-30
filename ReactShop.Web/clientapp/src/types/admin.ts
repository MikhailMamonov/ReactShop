import { Category } from "./categories";
import { Product } from "./products";
import { User } from "./users";
import { CartItem } from "types/";

export type IdentifierPropsType = number | string | undefined;
export type RowType = User | Category | Product | CartItem;

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: Product;
  index: number;
  children: React.ReactNode;
}
