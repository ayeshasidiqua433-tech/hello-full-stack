import { fetchUsers, saveUsers, loadUsers } from "./src/userService.js";
import { formatUser } from "./src/utils.js";

const main = async () => {
  try {
    console.log("Hello Full Stack!\n");

    const users = await fetchUsers();
    await saveUsers(users.slice(0, 5));
    console.log("5 users saved in the file\n");

    const saved = await loadUsers();
    saved.forEach((user) => console.log(formatUser(user)));
  } catch (err) {
    console.log("Error:", err.message);
  }
};

main();