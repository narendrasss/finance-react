import { AxiosRequestConfig } from 'axios';

export type Model = IUser | ICategory | IFixedExpense | ITransaction;

export interface IUser {
  email: string;
  password?: string;
  name: string;
  income: number;
  budget: number;
  goal: {
    goal: string;
    funds?: number;
    amount: number;
    payment: number;
    due: string;
  };
}

export interface ICategory {
  name: string;
  budget: number;
  spent: number;
}

export interface ICategoryResponse extends ICategory {
  _id: string;
}

export interface IFixedExpense {
  name: string;
  amount: number;
  due?: Date;
  payableTo?: string;
}

export interface ITransaction {
  vendor: string;
  amount: number;
  date: Date;
}

export type GetTransactionOptions = {
  [key: string]: string | number;
  vendor: string;
  category: string;
  moreThan: number;
  lessThan: number;
  after: string;
  before: string;
  period: string;
  max: number;
};

export interface MultiTransactionResponse extends CoinResponse<ITransaction[]> {
  total: number;
  options: GetTransactionOptions;
}

export type GetCategoryOptions = {
  period: string;
};

export interface CoinResponse<T> {
  token?: string;
  error?: CoinError;
  data: T;
}

export interface CoinError {
  code: number;
  message: string;
}

export interface CoinClientOptions {
  url?: string;
  token?: string | null;
  opts: AxiosRequestConfig;
}

export enum PeriodOptions {
  Day = 'In the last 24 hours',
  Week = 'In the last week',
  Month = 'In the last month'
}
