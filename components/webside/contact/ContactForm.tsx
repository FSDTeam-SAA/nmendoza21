/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useState } from "react";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <InViewAnimationWrapper animation="slideInRight" duration={800} delay={400}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First name"
                      className="bg-white border-gray-300 rounded-lg text-sm focus-visible:ring-cyan-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      className="bg-white border-gray-300 rounded-lg text-sm focus-visible:ring-cyan-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    className="bg-white border-gray-300 rounded-lg text-sm focus-visible:ring-cyan-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-white border-gray-300 rounded-lg text-sm focus-visible:ring-cyan-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Leave us a message..."
                    rows={5}
                    className="bg-white border-gray-300 rounded-lg text-sm focus-visible:ring-cyan-500 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <input type="checkbox" id="privacy" className="rounded" required />
            <label htmlFor="privacy" className="cursor-pointer">
              You agree to our friendly privacy policy.
            </label>
          </div>

          <Button
            type="submit"
            className="bg-primary text-white w-full py-2 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Form>
    </InViewAnimationWrapper>
  );
};

export default ContactForm;