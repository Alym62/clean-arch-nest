import { validate as uuiValidate } from 'uuid';
import { EntityBase } from '../../entity';

type StubProps = {
  propOne: string,
  propTwo: number,
};

class StubEntity extends EntityBase<StubProps> { }

describe('Entity unit test', () => {

  it('Should set props and id', () => {
    const props = { propOne: 'ValueOne', propTwo: 4 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuiValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { propOne: 'ValueOne', propTwo: 4 };
    const id = '91c49159-dc0d-4b95-bd0d-029c34f4bddb';
    const entity = new StubEntity(props, id);

    expect(uuiValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert a entity to a Json', () => {
    const props = { propOne: 'ValueOne', propTwo: 4 };
    const id = '91c49159-dc0d-4b95-bd0d-029c34f4bddb';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({ id, ...props });
  });
});
