import React from "react";

import { useQuery } from "react-apollo";
import { CONTACT_QUERY } from "../../../queries/contact";

import FixedImgBg from "../../layout/FixedImgBg";
import Spinner from "../../layout/Spinner";

const onSubmit = (e) => {
  e.preventDefault();
  console.log("submitted");
};

const Contact = () => {
  const { loading, error, data } = useQuery(CONTACT_QUERY);
  if (loading) return <Spinner />;
  if (error) return <h1>Error</h1>;

  const {
    heading,
    background: { url },
  } = data.contact;

  return (
    <div className="contact">
      <FixedImgBg imageUrl={url} />
      <h1 className="page-heading contact">{heading}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" />
        <label htmlFor="message">Message: </label>
        <input type="textarea" name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
