const API_URL = "https://jsonplaceholder.typicode.com";

export async function createUser(userData) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
}

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    throw new Error("Unable to fetch users");
  }

  return response.json();
}