import { writeFile, readFile } from "fs/promises";

export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Data not found");
  return res.json();
};

export const saveUsers = async (users) => {
  await writeFile("users.json", JSON.stringify(users, null, 2));
};

export const loadUsers = async () => {
  const text = await readFile("users.json", "utf-8");
  return JSON.parse(text);
};