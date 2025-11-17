import { ChangeEvent } from "react";

import { Alert, Stack, TextField, Typography } from "@mui/material";

import { ParseError } from "@/types";

type ConfigInputProps = {
  value: string;
  errors: ParseError[];
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const ConfigInput = ({ value, errors, onChange }: ConfigInputProps) => {
  return (
    <Stack spacing={3}>
      <Alert severity="info">
        <Typography variant="h6" gutterBottom>
          Input format
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ fontFamily: "monospace", mb: 1 }}
        >
          rowNumber;columnNumber;inputLabel;inputType;inputOptions
        </Typography>
        <Typography variant="body2" component="p">
          Types: <strong>SELECT</strong> — options separated by commas.{" "}
          <strong>TEXT_INPUT</strong> — placeholder text.
        </Typography>
      </Alert>

      <TextField
        label="Element configuration"
        placeholder="1;2;First Name;TEXT_INPUT;Enter your first name"
        multiline
        minRows={4}
        fullWidth
        value={value}
        onChange={onChange}
      />

      {errors.length > 0 && (
        <Alert severity="error">
          <Stack spacing={1}>
            {errors.map((error) => (
              <Typography key={`${error.line}-${error.value}`} variant="body2">
                Line {error.line}: {error.reason}
              </Typography>
            ))}
          </Stack>
        </Alert>
      )}
    </Stack>
  );
};
