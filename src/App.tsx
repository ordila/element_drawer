import { ChangeEvent, useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import "./styles.css";

import { ConfigInput } from "@/ui/components";

import { FieldGrid } from "@/ui/containers";

import { parseDrawerSpecs } from "@/utils";

import { SAMPLE_INPUT } from "@/constants";

export default function App() {
  const [rawInput, setRawInput] = useState<string>(SAMPLE_INPUT);

  const [values, setValues] = useState<Record<string, string>>({});

  const { fields, errors, maxColumn } = parseDrawerSpecs(rawInput);

  useEffect(() => {
    setValues((previous) => {
      const next: Record<string, string> = {};

      fields.forEach((field) => {
        next[field.id] = previous[field.id] ?? "";
      });

      return next;
    });
  }, [fields]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setRawInput(event.target.value);
  };

  const handleFieldValueChange = (fieldId: string, nextValue: string) => {
    setValues((previous) => {
      if (previous[fieldId] === nextValue) {
        return previous;
      }

      return { ...previous, [fieldId]: nextValue };
    });
  };

  return (
    <Box className="element-drawer" sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Element Drawer
      </Typography>

      <Box sx={{ mt: 3 }}>
        <ConfigInput
          value={rawInput}
          errors={errors}
          onChange={handleInputChange}
        />
      </Box>

      <Box sx={{ mt: 3 }}>
        <FieldGrid
          fields={fields}
          values={values}
          maxColumn={maxColumn}
          onFieldChange={handleFieldValueChange}
        />
      </Box>
    </Box>
  );
}
