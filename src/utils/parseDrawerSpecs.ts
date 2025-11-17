import { DrawerField, FieldType, ParseError, ParseResult } from "../types";

export const parseDrawerSpecs = (rawInput: string): ParseResult => {
  const fields: DrawerField[] = [];
  const errors: ParseError[] = [];
  let maxColumn = 1;

  rawInput
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line, index) => {
      const [rowPart, columnPart, labelPart, typePart, ...rest] =
        line.split(";");

      if (
        rowPart === undefined ||
        columnPart === undefined ||
        labelPart === undefined ||
        typePart === undefined
      ) {
        errors.push({
          line: index + 1,
          value: line,
          reason: "Expected five segments separated by semicolons.",
        });
        return;
      }

      const row = Number(rowPart);
      const column = Number(columnPart);

      if (!Number.isInteger(row) || row < 1) {
        errors.push({
          line: index + 1,
          value: line,
          reason: "rowNumber must be a positive integer.",
        });
        return;
      }

      if (!Number.isInteger(column) || column < 1) {
        errors.push({
          line: index + 1,
          value: line,
          reason: "columnNumber must be a positive integer.",
        });
        return;
      }

      const label = labelPart.trim();

      if (!label) {
        errors.push({
          line: index + 1,
          value: line,
          reason: "inputLabel must not be empty.",
        });
        return;
      }

      const normalizedType = typePart.trim().toUpperCase();
      const payload = rest.join(";").trim();

      if (!payload) {
        errors.push({
          line: index + 1,
          value: line,
          reason: "inputOptions/placeholder must not be empty.",
        });
        return;
      }

      if (
        normalizedType !== FieldType.SELECT &&
        normalizedType !== FieldType.TEXT_INPUT
      ) {
        errors.push({
          line: index + 1,
          value: line,
          reason: `Unknown inputType "${typePart}". Expected SELECT or TEXT_INPUT.`,
        });
        return;
      }

      const idBase = `${row}-${column}-${
        label.toLowerCase().replace(/\s+/g, "-") || "field"
      }`;

      if (normalizedType === FieldType.SELECT) {
        const options = payload
          .split(",")
          .map((option) => option.trim())
          .filter(Boolean);

        if (options.length === 0) {
          errors.push({
            line: index + 1,
            value: line,
            reason: "SELECT must include at least one option.",
          });
          return;
        }

        fields.push({
          id: `${idBase}-${index}`,
          row,
          column,
          label,
          type: FieldType.SELECT,
          options,
        });
      } else {
        fields.push({
          id: `${idBase}-${index}`,
          row,
          column,
          label,
          type: FieldType.TEXT_INPUT,
          placeholder: payload,
        });
      }

      maxColumn = Math.max(maxColumn, column);
    });

  return { fields, errors, maxColumn };
};
