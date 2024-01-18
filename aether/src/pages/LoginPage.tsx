"use client";

import { UserClientData } from "@/types/user";
import Wrapper from "@/components/Wrapper";
import Form from "@/components/forms/Form";
import { useAuthContext } from "@/context/useAuthContext";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter()
  const { login } = useAuthContext();
  const handleSubmit = (data: UserClientData) => {
    console.log(data)
    login(data)
    router.push('/onboarding')
  };
  return (
    <Wrapper className="justify-center items-center">
      <Form
        fields={[
          {
            name: "Code Name",
            property: "username",
            type: "text",
            placeholder: "Username",
            required: true,
            value: "",
          },
          {
            name: "Super Secret Code",
            property: "password",
            type: "password",
            placeholder: "Password",
            required: true,
            value: "",
          },
        ]}
        onSubmit={handleSubmit}
        buttonPrompt="Login"
        className="w-[400px]"
      />
    </Wrapper>
  );
};

export default LoginPage;
