import * as libClassValidator from "class-validator";
import { ClassValidatorFields } from "../../class-validator-fields";

class StubEntityClassValidatorFields extends ClassValidatorFields<{ field: string }> { }

describe('Class validator fields unit test', () => {

  it('Should initialize erros and validated data variables with null', () => {
    const sut = new StubEntityClassValidatorFields();

    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it('Should validate with errors', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([
      { property: 'field', constraints: { isRequired: 'test error' } },
    ]);

    const sut = new StubEntityClassValidatorFields();

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toBeNull();
    expect(sut.errors).toStrictEqual({ field: ['test error'] });
  });

  it('Should convert a entity to a Json', () => {

  });
});
