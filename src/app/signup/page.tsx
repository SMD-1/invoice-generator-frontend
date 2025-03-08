"use client";
import React from "react";
import { Label } from "../../components/ui/Label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const SignupForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="dark">
      <div className="flex h-screen justify-center items-center dark:bg-gray-950/[0.96] antialiased dark:bg-grid-white/[0.02] dark:overflow-hidden">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-gray-900">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Create an account
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Enter below details to create an account.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  className="dark:text-amber-50"
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  className="dark:text-amber-50"
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                className="dark:text-amber-50"
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                className="dark:text-amber-50"
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="confirm-password">Re-enter Password</Label>
              <Input
                className="dark:text-amber-50"
                id="confirm-password"
                placeholder="••••••••"
                type="confirm-password"
              />
            </LabelInputContainer>

            <button
              className="cursor-pointer bg-gradient-to-br relative group/btn from-black dark:from-gray-900 dark:to-gray-950 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>

            {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupForm;
