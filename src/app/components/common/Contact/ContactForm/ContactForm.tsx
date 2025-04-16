"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const entries = Array.from(data.entries()).map(([key, value]) => [
      key,
      typeof value === "string" ? value : "",
    ]);
    const encodedData = new URLSearchParams(entries).toString();

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData,
      });
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      alert("¡Enviado!");
      form.reset();
    } catch (error) {
      alert(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="surname"
        autoComplete="off"
        placeholder="Apellido"
        required
      />
      <input
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        autoComplete="off"
        placeholder="Teléfono"
      />
      <textarea
        typeof="text"
        name="message"
        placeholder="Mensaje"
        required
      ></textarea>
      <button disabled={isSending}>
        {isSending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

export default ContactForm;
