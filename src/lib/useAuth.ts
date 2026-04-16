"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { auth } from "./auth";
import { api } from "./api";
import { User } from "@/types";

export function useAuth() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User|null>(null);
  const [institution, setInstitution] = useState<any>(null);

  const fetchSession = useCallback(async (token: string) => {
    try {
      setLoading(true);
      const res = await api.me(token);
      setUser(res.user);
      setInstitution(res.institution);
    } catch (err) {
      auth.clear();
      router.replace("/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const updateSession = async (newToken: string) => {
    auth.setToken(newToken);
    await fetchSession(newToken);
  };

  useEffect(() => {
    const token = auth.getToken();
    if (!token) {
      router.replace("/login");
      setLoading(false);
      return;
    }
    fetchSession(token);
  }, [fetchSession, router]);

  return { loading, user, institution, updateSession };
}