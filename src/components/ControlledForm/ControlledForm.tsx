import { Button, Input, Select } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";

import { formSchema } from "@/schemas/FormSchema";
import { useCountryStore } from "@/stores/countriesStore";
import { useFormStore } from "@/stores/formsStore";
import { convertToBase64 } from "@/utils/convertToBase64";

interface Props {
  onSuccessSubmit: () => void;
}

type Inputs = z.infer<typeof formSchema>;

export default function ControlledForm({ onSuccessSubmit }: Props) {
  const countries = useCountryStore((state) => state.countries);
  const addFormToStore = useFormStore((state) => state.addForm);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      age: undefined,
      email: "",
      passwords: {
        password: "",
        confirmPassword: "",
      },
      country: undefined,
      gender: undefined,
    },
  });

  const onSubmit = async (values: Inputs) => {
    addFormToStore({
      ...values,
      password: values.passwords.password,
      file: await convertToBase64(values.file[0]),
    });

    onSuccessSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-md max-w-[100%] flex flex-col gap-3"
    >
      <Input
        label="Name"
        placeholder="Your Name"
        type="text"
        error={dirtyFields.name ? errors.name?.message : null}
        {...register("name")}
      />
      <Input
        label="Age"
        placeholder="Your Age"
        error={dirtyFields.age ? errors.age?.message : null}
        {...register("age", {
          valueAsNumber: true,
        })}
      />
      <Input
        label="Email"
        placeholder="Your Email"
        type="email"
        error={dirtyFields.email ? errors.email?.message : null}
        {...register("email")}
      />
      <Input
        label="Password"
        type="password"
        error={
          dirtyFields.passwords?.password
            ? errors.passwords?.password?.message
            : null
        }
        {...register("passwords.password")}
      />
      <Input
        label="Confirm Password"
        type="password"
        error={
          dirtyFields.passwords?.confirmPassword
            ? errors.passwords?.confirmPassword?.message
            : null
        }
        {...register("passwords.confirmPassword")}
      />

      <Select
        label="Gender"
        list={["Man", "Woman"]}
        error={dirtyFields.gender ? errors.gender?.message : null}
        {...register("gender")}
      />

      <Input
        label="Country"
        autoCompleteList={countries}
        error={dirtyFields.country ? errors.country?.message : null}
        {...register("country")}
      />

      <Input
        label="Select File"
        type="file"
        error={dirtyFields.file ? errors.file?.message : null}
        {...register("file")}
      />

      <Input
        type="checkbox"
        label="Terms and conditions"
        styleLabel={{ direction: "row", position: "after" }}
        error={dirtyFields.acceptTerms ? errors.acceptTerms?.message : null}
        {...register("acceptTerms")}
      />

      <Button disabled={!isValid}>Submit Form</Button>
    </form>
  );
}
