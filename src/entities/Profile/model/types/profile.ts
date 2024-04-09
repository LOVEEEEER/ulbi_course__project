import { Currency } from "entities/Currency";
import { Country } from "shared/const/common";

export interface ProfileType {
  first?: string,
  lastName?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string,
}

export interface ProfileSchema {
  data?: ProfileType,
  form?: ProfileType,
  isLoading: boolean,
  error?: string,
  readonly: boolean
}
