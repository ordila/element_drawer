import { memo } from "react";

import { Box } from "@mui/material";

import { DrawerField } from "@/types";

import { EmptyGridMessage, FieldGridItem } from "@/ui/elements";

type FieldGridProps = {
  fields: DrawerField[];
  values: Record<string, string>;
  maxColumn: number;
  onFieldChange: (fieldId: string, value: string) => void;
};

export const FieldGrid = memo(function FieldGrid({
  fields,
  values,
  maxColumn,
  onFieldChange,
}: FieldGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: `repeat(${maxColumn}, minmax(0, 1fr))`,
      }}
    >
      {fields.length === 0 ? (
        <EmptyGridMessage columnSpan={maxColumn} />
      ) : (
        fields.map((field) => (
          <FieldGridItem
            key={field.id}
            field={field}
            value={values[field.id] ?? ""}
            onChange={onFieldChange}
          />
        ))
      )}
    </Box>
  );
});
