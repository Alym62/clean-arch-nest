import { EntityBase } from "@/shared/domain/entities/entity";

export type UserProps = {
  name: string,
  email: string,
  password: string,
  createAt?: Date,
};

export class UserEntity extends EntityBase<UserProps> {
  constructor(public readonly props: UserProps, id?: string) {
    super(props, id);
    this.props.createAt = this.props.createAt ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get createAt() {
    return this.props.createAt;
  }
};
