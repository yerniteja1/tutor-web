"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { api } from "@/lib/api";
import { auth } from "@/lib/auth";
import { School } from "@/types";

export default function SchoolSelector() {
  const router = useRouter();

  const [schools, setSchools] = useState<School[]>([]);
  const [selectedSchoolId, setSelectedSchoolId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Load schools from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("institutions");

    if (!stored) {
      router.push("/login");
      return;
    }

    const parsed: School[] = JSON.parse(stored);
    setSchools(parsed);

    if (parsed.length > 0) {
      setSelectedSchoolId(parsed[0].id);
    }
  }, [router]);

  const handleContinue = async () => {
    if (!selectedSchoolId) {
      setError("Please select a school");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const token = auth.getToken();
      if (!token) {
        router.push("/login");
        return;
      }

      const res = await api.selectInstitution(token, selectedSchoolId);

      auth.setToken(res.token, true);

      router.push("/dashboard");
      localStorage.removeItem("institutions");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-100 mx-auto gap-8 p-6">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Select School
        </h1>
        <p className="text-sm text-muted-foreground">
          Choose a school to proceed
        </p>
      </div>

      {/* School Cards */}
      <div className="flex flex-col w-full gap-4">
        {schools.map((school: School) => {
          const isSelected = selectedSchoolId === school.id;

          return (
            <div
              key={school.id}
              onClick={() => {
                setSelectedSchoolId(school.id);
                if (error) setError("");
              }}
              className={`flex flex-col gap-2 w-full border rounded-md p-5 cursor-pointer transition-all ${
                isSelected
                  ? "border-input bg-background ring-1 ring-ring/10 shadow-sm"
                  : "border-border bg-background hover:border-input"
              }`}
            >
              {/* Top Row */}
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={isSelected}
                  className="pointer-events-none h-5 w-5 rounded border-muted-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <p className="text-[15px] text-foreground leading-none">
                  {school.name}
                </p>
              </div>

              {/* Details */}
              <div className="flex flex-col space-y-1">
                <p className="text-xs text-muted-foreground/70">
                  {school.id}
                </p>
                <p className="text-[13px] font-medium text-foreground/90 leading-snug">
                  {school.address}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      {/* Footer */}
      <div className="w-full space-y-6">
        <Button
          onClick={handleContinue}
          disabled={!selectedSchoolId || loading}
          className="w-full h-12 font-bold tracking-widest uppercase rounded-md"
        >
          {loading ? "Processing..." : "CONTINUE"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Having issues?{" "}
          <Link
            href="#"
            className="text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}