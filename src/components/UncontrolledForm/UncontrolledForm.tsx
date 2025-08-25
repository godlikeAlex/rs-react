import { useState, type FormEvent } from "react";
import { Input } from "../Input";
import { formSchema } from "@/schemas/FormSchema";
import z from "zod";
import { Button } from "../Button";
import { Select } from "../Select";
import { useCountryStore } from "@/stores/countriesStore";
import { useFormStore } from "@/stores/formsStore";
import { convertToBase64 } from "@/utils/convertToBase64";

interface Props {
  onSuccessSubmit: () => void;
}

type Inputs = z.infer<typeof formSchema>;

type FormErrors = Partial<Record<keyof Inputs, string[]>>;

export default function UncontrolledForm({ onSuccessSubmit }: Props) {
  const addFormToStore = useFormStore((state) => state.addForm);
  const countries = useCountryStore((state) => state.countries);

  const [errors, setErrors] = useState<FormErrors>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const input = e.currentTarget.elements.namedItem(
      "file"
    ) as HTMLInputElement;

    const result = formSchema.safeParse({
      ...values,
      age: Number(values.age),
      file: input?.files,
      acceptTerms: Boolean(values.acceptTerms),
      passwords: {
        password: values.password,
        confirmPassword: values.confirmPassword,
      },
    });

    if (!result.success) {
      const tree = z.flattenError(result.error);

      setErrors(tree.fieldErrors);
      return;
    }

    setErrors({});
    addFormToStore({
      ...result.data,
      password: result.data.passwords.password,
      file: await convertToBase64(result.data.file[0]),
    });

    onSuccessSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-md max-w-[100%] flex flex-col gap-3"
    >
      <Input
        label="Name"
        placeholder="Your Name"
        type="text"
        name="name"
        error={errors?.name?.[0]}
      />
      <Input
        label="Age"
        name="age"
        placeholder="Your Age"
        error={errors?.age?.[0]}
      />
      <Input
        label="Email"
        placeholder="Your Email"
        type="email"
        name="email"
        error={errors?.email?.[0]}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        error={errors?.passwords?.[0]}
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        error={errors?.passwords?.[0]}
      />

      <Select
        label="Gender"
        list={["Select", "Man", "Woman"]}
        error={errors?.gender?.[0]}
        name="gender"
      />

      <Input
        label="Country"
        autoCompleteList={countries}
        name="country"
        error={errors?.country?.[0]}
      />

      <Input
        label="Select File"
        type="file"
        name="file"
        error={errors?.file?.[0]}
        multiple={true}
      />

      <Input
        type="checkbox"
        label="Terms and conditions"
        styleLabel={{ direction: "row", position: "after" }}
        error={errors?.acceptTerms?.[0]}
        name="acceptTerms"
      />

      <Button>Submit Form</Button>
    </form>
  );
}
