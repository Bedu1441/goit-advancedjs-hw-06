type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

const formParams: Params = {
  email: 'user@mail.com',
  firstName: 'Max',
  lastName: 'Smith',
  phone: null,
};

export {};