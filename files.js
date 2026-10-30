import { readFile, writeFile } from "fs/promises";
async function main() {
 await writeFile("note.txt", "Hello, this is my first file");
 const text = await readFile("note.txt", "utf-8");
 console.log(text);
}
main();
