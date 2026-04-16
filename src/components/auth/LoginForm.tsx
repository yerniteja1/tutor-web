"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { api } from "@/lib/api";
import { auth } from "@/lib/auth";

export default function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    mobileNo: "",
    password: "",
    keepLoggedIn: false,
  });

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (formData.mobileNo.length !== 10) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    if (!formData.password) {
      setError("Password is required");
      return;
    }

    try {
      setError("");

      const res = await api.login({
        mobileNo: formData.mobileNo,
        password: formData.password,
        rememberMe: formData.keepLoggedIn,
      });

      auth.setToken(res.token, formData.keepLoggedIn);

      localStorage.setItem("institutions", JSON.stringify(res.institutions));

      router.push("/select-school");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto gap-8 p-4">
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

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col w-full gap-5"
      >
        {/* Mobile No */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="mobileNo">Mobile No</Label>
          <Input
            id="mobileNo"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            autoComplete="tel"
            placeholder="9847953684"
            value={formData.mobileNo}
            onChange={(e) => {
              setFormData({ ...formData, mobileNo: e.target.value });
              if (error) setError("");
            }}
            className="h-12"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              if (error) setError("");
            }}
            className="h-12"
          />
        </div>

        {/* Keep me logged in */}
        <div className="flex items-center gap-3">
          <Checkbox
            id="keepLoggedIn"
            checked={formData.keepLoggedIn}
            onCheckedChange={(checked) =>
              setFormData({
                ...formData,
                keepLoggedIn: checked === true,
              })
            }
          />
          <Label htmlFor="keepLoggedIn" className="cursor-pointer">
            Keep me logged in
          </Label>
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full h-12 font-bold tracking-widest uppercase rounded-md"
        >
          SIGN IN
        </Button>

        {/* Error */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-2">
          Trouble in login?{" "}
          <Link
            href="#"
            className="text-foreground font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Request Access
          </Link>
        </p>
      </form>
    </div>
  );
}
