"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import QRcode from "@/components/QRcode";
import { toast } from "sonner";

const LoginWithCode = () => {
  const [loginCode, setLoginCode] = useState("");
  useEffect(() => {
    const fetchLoginCode = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found");
        return;
      }

      try {
        const response = await fetch(
          "http://127.0.0.1:3000/user-management/v1/generate/login/code",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          }
        );

        if (!response.ok) {
          toast.error("Failed to fetch login code");
          throw new Error("Failed to fetch login code");
        }
        const data = await response.text();

        setLoginCode(data);
      } catch (error) {
        console.error("Error fetching login code:", error);
      }
    };

    fetchLoginCode();
  }, []); // Runs only on mount

  return (
    <div className="">
      <div className="h-screen px-4 dark:bg-gray-800 dark:bg-opacity-90 dark:bg-blur-lg">
        <div className="flex h-full flex-col items-center justify-center">
          <Card className="p-4 md:p-8 w-full max-w-md">
            {/* <CardHeader>
              <CardTitle>Create project</CardTitle>
            </CardHeader> */}
            <CardContent className="flex justify-center">
              <QRcode loginCode={loginCode} />
            </CardContent>
            <p className="text-center">Login code: {loginCode}</p>
            <CardDescription className="text-center text-black text-lg">
              Scan this QR code from your phone to login.
            </CardDescription>
            {/* <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginWithCode;
