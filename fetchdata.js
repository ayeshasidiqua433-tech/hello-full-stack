async function getUsers() {
 try {
 const res = await fetch("https://jsonplaceholder.typicode.com/users");
 const users = await res.json();
 users.slice(0, 5).forEach(({ name, email }) => {
 console.log(`${name} - ${email}`);
 });
 } catch (err) {
 console.log("Error:", err.message);
 }
}
getUsers();
