"use client";

import { UserClientData } from "@/types/user";
import { signupUser } from "@/api/authActions";
import Wrapper from "@/components/Wrapper";
import Form from "@/components/forms/Form";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const handleSubmit = async (data: UserClientData) => {
    try {
      const user = await signupUser(data)
      console.log(user)
      router.push("/login")
    } catch (err) {
      console.error(err);
    }

  };
  return (
    <Wrapper className="justify-center items-center">
      <Form
        fields={[
          {
            name: "Username",
            property: "username",
            type: "text",
            placeholder: "Username",
            required: true,
            value: "",
          },
          {
            name: "Email",
            property: "email",
            type: "email",
            placeholder: "Email",
            required: true,
            value: "",
          },
          {
            name: "Password",
            property: "password",
            type: "password",
            placeholder: "Password",
            required: true,
            value: "",
          },
        ]}
        onSubmit={handleSubmit}
        buttonPrompt="Sign Up "
        className="w-[400px]"
      />
    </Wrapper>
  );
};

export default SignupPage;
