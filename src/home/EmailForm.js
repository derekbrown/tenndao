import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let token = "U0uTMwTn98hX1NxqV7AXm7uY3MbDo03LWR7uAxN76WZxiKxXDnQZxKB9ywQw5mG5";
    try {
      let res = await fetch("https://api.beehiiv.com/v2/publications/pub_6f137375-16fa-457e-ada9-2caf59fdd073/subscriptions", {
        method: "POST",
        headers:{
          'Authorization': "Bearer " + token,
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          publicationId: "pub_6f137375-16fa-457e-ada9-2caf59fdd073",
          email: email
        }),
      });
      if (res.status === 200) {
        setEmail("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex w-full flex-row mb-4" onSubmit={handleSubmit}>
        <div className="flex-1">
          <label className="hidden">Email</label>
          <input
            className="flex-1 w-full p-4 rounded-l-xl text-xl border-4 border-r-0 border-primary-violet"
            placeholder="Sign up for updates from TennDAO"
            type="email"
            name="email"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <button className="bg-primary-violet text-white hover:text-primary-violet hover:bg-secondary-violet text-xl font-semibold p-4 rounded-r-xl border-4 border-primary-violet" type="submit">Subscribe</button>
        </div>
      </form>
  );
}

export default EmailForm;
