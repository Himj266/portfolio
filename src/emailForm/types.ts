//constants
import { FORM_FIELDS } from "./FormFields";

export interface EmailFormValues {
  [FORM_FIELDS.name]?: string;
  [FORM_FIELDS.email]?: string;
  [FORM_FIELDS.message]?: string;
}
