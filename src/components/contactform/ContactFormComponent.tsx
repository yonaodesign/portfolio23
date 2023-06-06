import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormWrapper = styled.form`
  width: 100%;
`;

const StyledInput = styled.input`
  box-sizing: content-box;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #3f3f3f;
  font-size: 18px;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 10px;
  min-width: 100%;
  max-width: 100%;

  @media (prefers-color-scheme: light) {
    color: black;
  }
`;

const StyledTextArea = styled.textarea`
  box-sizing: content-box;
  margin-bottom: 20px;
  padding: 10px;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #3f3f3f;
  font-size: 18px;

  @media (prefers-color-scheme: light) {
  }
`;

const StyledButton = styled.input`
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #3f3f3f;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  @media (prefers-color-scheme: light) {
  }
`;

export const ContactFormComponent = () => {
  const [isProcessing, setIsProcessing] = useState<
    "idle" | "processing" | "done"
  >("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => handleStringification(JSON.stringify(data));

  const handleStringification = async (payloadWrittenInTheForm: any) => {
    setIsProcessing("processing");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: payloadWrittenInTheForm,
    }).then((res) => {
      if (res.status === 200) {
        setIsProcessing("done");
      }
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h4>Contact</h4>
      {isProcessing === "done" ? (
        <div>Thank you. I&apos;ve got your message!</div>
      ) : (
        <>
          <StyledLabel>Your Name</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Bob"
            {...register("FullName", { required: true, maxLength: 100 })}
          />
          <StyledLabel>Your Email</StyledLabel>
          <StyledInput
            type="text"
            placeholder="bob@abobek.com"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <StyledLabel>You Message</StyledLabel>
          <StyledTextArea
            placeholder="Write your message here."
            {...register("Message", { required: true, maxLength: 1000 })}
          />
          <StyledButton
            type="submit"
            value="Send the message"
            disabled={isProcessing === "processing"}
          />
        </>
      )}
    </FormWrapper>
  );
};
