export async function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      email === "elias@andigital" && password === "andigital" ? resolve() : reject();
    }, 1000);
  });
}
