import { validateSync } from "class-validator";
import { FieldsErros, ValidatorFieldsInterface } from "./validators-field";

export abstract class ClassValidatorFields<PropsValidated> implements ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErros = null;
  validatedData: PropsValidated = null;

  validate(data: any): boolean {
    const errors = validateSync(data);

    if (errors.length) {
      this.errors = {};

      for (let error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints);
      }

    } else {
      this.validatedData = data;
    }

    return !errors.length;
  }
}
