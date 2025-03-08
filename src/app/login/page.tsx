"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/Label";
import { Spotlight } from "@/components/ui/spotlight";
import { QrCode } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Clicked", { email, password });
    try {
      const response = await fetch(
        "http://127.0.0.1:3000/user-management/v1/login/user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        }
      );
      console.log("response: ", response);
      const data = await response.json();
      console.log("data: ", data);
      if (!data.success) {
        toast.error(data.message);
        return;
      }

      localStorage.setItem("token", data.token); // Store token (can use cookies instead)
      router.push("/"); // Redirect after login
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/"); // Redirect if already logged in
    }
  }, []);

  return (
    <div className="dark">
      <div
        className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden dark:bg-gray-950 dark:bg-opacity-90 dark:bg-blur-lg"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <Spotlight />
        <div className="flex flex-col items-center p-4 max-w-4xl mx-auto relative z-10 w-full bg-gray-900 bg-opacity-90 rounded-md shadow-lg">
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="text-2xl font-bold text-gray-100">
              Login to your account to continue
            </h3>
            <p className="text-[16px] text-gray-400">
              Scan QR code or login through email
            </p>
          </div>
          <div className="flex w-full mt-4">
            {/* Left side for showing QR code */}
            <div className="flex flex-col items-center justify-center w-[calc(50%-15px)] p-4">
              <div className="flex items-center justify-center w-full h-40 bg-gray-800 rounded-md">
                <QrCode width={80} height={80} color="white" />
              </div>
              <p className="text-[14px] text-gray-200 mt-2">
                Scan QR code to directly login
              </p>
            </div>
            {/* Center separator */}
            <div className="flex flex-col items-center my-4">
              <div className="w-px h-20 bg-gray-800"></div>
              <div className="my-2 text-gray-700 text-sm">OR</div>
              <div className="w-px h-20 bg-gray-800"></div>
            </div>
            {/* Right side for showing login form */}
            <div className="flex flex-col items-center justify-center w-[calc(50%-15px)] p-4 text-gray-200">
              <form
                className="flex flex-col justify-center w-full"
                onSubmit={handleLogin}
              >
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    required
                    id="email"
                    type="email"
                    autoComplete="username"
                    placeholder="team@skdan.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    required
                    id="password"
                    type="password"
                    placeholder="••••••••••"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="w-full flex justify-start mt-4">
                  <Button
                    type="submit"
                    className="cursor-pointer bg-gray-800 hover:bg-gray-950 text-gray-50 hover:text-gray-100"
                    variant="outline"
                  >
                    Login
                  </Button>
                </div>
              </form>
              {/* footer */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
