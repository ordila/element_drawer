import { ChangeEvent } from "react";

import { MenuItem, TextField } from "@mui/material";

import { getGridPlacement } from "@/utils/grid";
import { DrawerField, FieldType } from "@/types";

type FieldGridItemProps = {
  field: DrawerField;
  value: string;
  onChange: (fieldId: string, value: string) => void;
};

export const FieldGridItem = ({
  field,
  value,
  onChange,
}: FieldGridItemProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(field.id, event.target.value);
  };

  const commonProps = {
    label: field.label,
    value,
    onChange: handleChange,
    fullWidth: true,
    sx: getGridPlacement(field.row, field.column),
  };

  if (field.type === FieldType.SELECT) {
    return (
      <TextField {...commonProps} select>
        {field.options?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  return <TextField {...commonProps} placeholder={field.placeholder} />;
};
