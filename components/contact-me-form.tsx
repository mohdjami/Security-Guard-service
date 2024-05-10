"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Icons } from "./icons";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [loading, isLoading] = useState(false);
  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    isLoading(true);
    event.preventDefault();
    console.log(email, name, text);
    const res = await fetch("/emails", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ name, email, text }),
    });
    isLoading(false);
  };

  return (
    <>
      {" "}
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-md space-y-6">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                rows={4}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            {loading ? (
              <Button className="flex w-full" type="submit">
                Submit <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Submit
              </Button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
