import { FormProvider, useForm, useFormContext } from "react-hook-form";

const FormComponent = ({ label, optional, pattern, ...inputAttrs }) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col my-5">
      <label className="text-xl  text-gray-700 shadow-md">
        {label}
        {optional ? "" : <span className="text-red-500"> *</span>}
      </label>

      <input
        {...inputAttrs}
        {...register(inputAttrs.name, {
          required: !optional,
          pattern: pattern,
        })}
        className="rounded-md border-gray-400 shadow-md h-10 border px-3 w-full md:w-auto max-w-lg min-w-sm outline-none focus:bg-gray-100"
      />
    </div>
  );
};

const Register = () => {
  const { handleSubmit, ...methods } = useForm();
  return (
    <FormProvider {...{ handleSubmit, ...methods }}>
      <form
        method="post"
        id="register"
        name="register"
        className="mt-40 lg:w-[50rem] mx-auto"
        onSubmit={handleSubmit()}
      >
        <input type="hidden" name="form-name" value="register" />
        <span className="section-title">Register Now</span>
        <div className="w-[95%] max-w-[50rem] h-[50rem] lg:h-[55rem]  shadow-lg border-4 border-black px-10 lg:px-40 pt-5 form rounded-md">
          <FormComponent name="name" label="Full Name" />
          <FormComponent
            name="class"
            label="Class"
            pattern={/([6-9]|1[0-3])-(\d|1[01])/g}
          />
          <FormComponent type="email" name="email" label="Email" />
          <FormComponent
            type="number"
            name="YPqjbf"
            label="Admission Number"
            pattern={/\d{5}/g}
          />
          <FormComponent
            type="tel"
            name="phone"
            label="Phone Number"
            pattern={/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g}
          />
          <FormComponent
            type="tel"
            name="whatsapp"
            label="Whatsapp Number"
            pattern={/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g}
          />
          <FormComponent
            name="discord"
            label="Discord Username"
            pattern={/.+#\d{4}/g}
            optional
          />
          <input
            type="submit"
            value="Register"
            className="btn w-48 lg:w-80 h-16  bg-white lg:mt-10 outline-none"
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Register;

// Name, Class, Admission, Email, Phone, Whatsapp, Discord
