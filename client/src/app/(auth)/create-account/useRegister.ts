import { IUserAuth } from "@/interfaces/user.interface";
import { useState } from "react";
import { LoginType, registerSchema, RegisterType } from "../validations/auth";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FetchResult, useMutation } from "@apollo/client";
import { REGISTER_USER } from "@/queries/auth";
// import { useRouter } from "next/navigation";

export const useRegister = (): IUserAuth => {
  const [validationErrors, setValidationErrors] = useState<RegisterType | LoginType>({
    username: '',
    password: '',
    email: ''
  });
  // const router: AppRouterInstance = useRouter();
  const [registerUser, { loading }] = useMutation(REGISTER_USER);

  const onRegisterSubmit = async (formData: FormData): Promise<void> => {
    const resultSchema = registerSchema.safeParse(Object.fromEntries(formData));
    if (!resultSchema.success) {
      setValidationErrors({
        username: resultSchema.error.format().username?._errors[0]!,
        email: resultSchema.error.format().email?._errors[0]!,
        password: resultSchema.error.format().password?._errors[0]!
      });
    } else {
      const result: FetchResult = await registerUser({
        variables: { user: resultSchema.data }
      });
      console.log(result)
    }
  }

  return {
    loading,
    validationErrors,
    setValidationErrors,
    onRegisterSubmit
  }
}
