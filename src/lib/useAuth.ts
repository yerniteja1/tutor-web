"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "./auth";
import { api } from "./api";

export function useAuth() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [institution, setInstitution] = useState<any>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const token = auth.getToken();

        if (!token) {
          router.replace("/login");
          return;
        }

        const res = await api.me(token);

        setUser(res.user);
        setInstitution(res.institution);
      } catch (err) {
        auth.clear();
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  return { loading, user, institution };
}