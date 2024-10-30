import { Dispatch, SetStateAction } from 'react';
import { LoginType, RegisterType } from '@/app/(auth)/validations/auth';

export interface IUserAuth {
  loading: boolean;
  validationErrors?: RegisterType | LoginType;
  setValidationErrors?: Dispatch<SetStateAction<RegisterType | LoginType>>;
  onRegisterSubmit?: (formData: FormData) => void;
  onLoginSubmit?: (formData: FormData) => void;
  authWithGoogle?: (formData: FormData) => Promise<void>;
  authWithFacebook?: (formData: FormData) => Promise<void>;
}
