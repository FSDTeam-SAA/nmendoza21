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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="First name"
                    className="bg-gray-50/50 border-gray-200 rounded-xl h-12 text-base focus-visible:ring-cyan-500 transition-all duration-200"
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
                    className="bg-gray-50/50 border-gray-200 rounded-xl h-12 text-base focus-visible:ring-cyan-500 transition-all duration-200"
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
                  className="bg-gray-50/50 border-gray-200 rounded-xl h-12 text-base focus-visible:ring-cyan-500 transition-all duration-200"
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
                  className="bg-gray-50/50 border-gray-200 rounded-xl h-12 text-base focus-visible:ring-cyan-500 transition-all duration-200"
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
                  className="bg-gray-50/50 border-gray-200 rounded-xl text-base focus-visible:ring-cyan-500 resize-none transition-all duration-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <input 
            type="checkbox" 
            id="privacy" 
            className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer" 
            required 
          />
          <label htmlFor="privacy" className="cursor-pointer select-none">
            You agree to our friendly private policy.
          </label>
        </div>

        <Button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white w-full h-12 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg shadow-cyan-200/50 disabled:opacity-50 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;