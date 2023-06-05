import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactSection = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "100px",
        backgroundColor: "#e2e2e2",
        gap: 50,
      }}
    >
      <ContactForm />
    </section>
  );
};
