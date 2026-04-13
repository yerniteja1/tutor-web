"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    mobileNo: "",
    password: "",
    keepLoggedIn: false,
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/select-school");
  };

  return (
    <div className="flex flex-col items-center w-full mx-auto gap-8 p-2">
      
      {/* Logo */}
      <div className="relative w-20 h-20">
        <Image
          src="/tutox-logo-dark.svg"
          alt="School Magic"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Sign-in to School Magic
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your mobile no and password to login
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col w-full gap-5">
        
        {/* Mobile No */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="mobileNo" className="text-sm font-medium text-foreground">
            Mobile No
          </Label>
          <Input
            id="mobileNo"
            type="tel"
            placeholder="9847953684"
            value={formData.mobileNo}
            onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
            className="h-12 rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/50"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder=""
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="h-12 rounded-md border-input bg-background px-3 py-2"
          />
        </div>

        {/* Keep me logged in */}
        <div className="flex items-center gap-3 py-1">
          <Checkbox
            id="keepLoggedIn"
            checked={formData.keepLoggedIn}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, keepLoggedIn: checked === true })
            }
            className="h-5 w-5 rounded border-muted-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          />
          <Label
            htmlFor="keepLoggedIn"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            Keep me logged in
          </Label>
        </div>

        {/* Sign In Button */}
        <Button
          onClick={handleSubmit}
          className="w-full h-12 bg-[#0F172A] hover:bg-[#1e293b] text-white font-bold tracking-widest uppercase rounded-md transition-colors"
        >
          SIGN IN
        </Button>

        {/* Footer Link */}
        <p className="text-center text-sm text-muted-foreground mt-2">
          Trouble in login?{" "}
          <a
            href="#"
            className="text-foreground font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Request Access
          </a>
        </p>
      </div>
    </div>
  );
}
