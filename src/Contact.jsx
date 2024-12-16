import { useMutation } from "@tanstack/react-query";

import postContact from "./api/postContact";

const Contact = () => {
  const mutation = useMutation({
    mutationFn: function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message")
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>

      {mutation.isSuccess ? (
        <h3>Submitted</h3>
      ) : (
        <form onSubmit={mutation.mutate}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />

          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
