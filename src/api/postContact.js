export default async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
}