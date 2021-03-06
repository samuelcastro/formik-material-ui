import * as React from 'react';
import MuiSelect, {
  SelectProps as MuiSelectProps,
} from '@material-ui/core/Select';
import { FieldProps } from 'formik';

export interface SelectProps
  extends FieldProps,
    Omit<MuiSelectProps, 'name' | 'value'> {}

export function fieldToSelect({
  disabled,
  field,
  form: { isSubmitting },
  ...props
}: SelectProps): MuiSelectProps {
  return {
    disabled: disabled ?? isSubmitting,
    ...field,
    ...props,
  };
}

export function Select(props: SelectProps) {
  return <MuiSelect {...fieldToSelect(props)} />;
}

Select.displayName = 'FormikMaterialUISelect';
