import React from "react";

const ContactForm = () => {
  return (
    <div>
      <input type="checkbox" id="contact-form" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="contact-form"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">GIVE ME YOUR FEEDBACK</h3>
          <form
            className="text-center"
            action="mailto:mazharul383all@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <input
              name="mail"
              type="email"
              placeholder="Type your Email address"
              class="m-4 input input-bordered input-info w-full max-w-xs"
            />
            <input
              name="name"
              type="text"
              placeholder="Type your Name"
              class="m-4 input input-bordered input-info w-full max-w-xs"
            />
            <textarea
              name="comment"
              placeholder="Give your feedback or offer"
              class=" m-4 input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <input
              type="submit"
              value="SEND EMAIL"
              className=" btn drop-shadow-2xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
