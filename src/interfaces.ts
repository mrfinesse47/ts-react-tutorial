export interface address {
  street: string;
  number: number;
}

export interface user {
  name: string;
  age: number;
  country: string;
  address: address; //was originaly address: { street: string; number: number }; better to use another interface
  admin: boolean;
}

//if your interfaces will be reused across the codebase it is best to remove them from app components
