export enum FieldType {
  SELECT = "SELECT",
  TEXT_INPUT = "TEXT_INPUT",
}

export type DrawerField = {
  id: string;
  row: number;
  column: number;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
};

export type ParseError = {
  line: number;
  value: string;
  reason: string;
};

export type ParseResult = {
  fields: DrawerField[];
  errors: ParseError[];
  maxColumn: number;
};
