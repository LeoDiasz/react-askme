
export function useDate() {
  const date = new Date();

  const dateCreated = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;

  return dateCreated;

};