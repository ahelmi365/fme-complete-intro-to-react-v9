import { useMutation } from "@tanstack/react-query";

import postContact from "./api/postContact";

const Contact = () => {
  const mutation = useMutation({
    mutationFn: function (formData) {
      // e.preventDefault();
      // const formData = new FormData(e.target);
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message")
      );
    },
  });

  if (mutation.isError) {
    return <h2>{mutation.error.message}</h2>;
  }

  return (
    <div className="contact">
      <h2>Contact</h2>

      {mutation.isSuccess ? (
        <h3>Submitted</h3>
      ) : (
        <form action={mutation.mutate}>
          <ContactInput
            type="text"
            name="name"
            placeholder="Name"
            isLoading={mutation.isPending}
          />
          <ContactInput
            type="email"
            name="email"
            placeholder="Email"
            isLoading={mutation.isPending}
          />
          <textarea
            name="message"
            placeholder="Message"
            disabled={mutation.isPending}
          />

          <button disabled={mutation.isPending}>
            {mutation.isPending ? "Submiting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

const ContactInput = ({ type, name, id, placeholder, isLoading }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={isLoading}
    />
  );
};
export default Contact;
