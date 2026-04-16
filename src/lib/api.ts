const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  async login(data: {
    mobileNo: string;
    password: string;
    rememberMe: boolean;
  }) {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Invalid credentials");

    return res.json();
  },

  async selectInstitution(token: string, institutionId: string) {
    const res = await fetch(`${BASE_URL}/api/auth/select-institution`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ institutionId }),
    });

    if (!res.ok) throw new Error("Failed to select institution");

    return res.json();
  },
};