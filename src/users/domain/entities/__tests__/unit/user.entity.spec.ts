import { UserDataBuilder } from '@/users/domain/testing/helper/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';

describe('User entity unit test', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});

    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createAt).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('Setter of name field', () => {
    sut['name'] = 'other name';
    expect(sut.props.name).toEqual('other name');
  });

  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('Getter of password field', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  });

  it('Setter of password field', () => {
    sut['password'] = 'other password';
    expect(sut.props.password).toEqual('other password');
  });

  it('Getter of createAt field', () => {
    expect(sut.props.createAt).toBeDefined();
    expect(sut.props.createAt).toBeInstanceOf(Date);
  });

  it('Should update a user', () => {
    sut.update('other name');
    expect(sut.props.name).toEqual('other name');
  });

  it('Should update a password', () => {
    sut.updatePassword('other password');
    expect(sut.props.password).toEqual('other password');
  });
});
