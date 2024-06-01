interface FormInputChangeAction {
  type: "FORM_INPUT_CHANGE";
  payload: {
    fieldId: string;
    value: any;
  };
}

export type UseFormAction = FormInputChangeAction;

export type UseFormOnAction = (action: FormInputChangeAction) => void;
