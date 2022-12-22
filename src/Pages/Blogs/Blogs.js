import React from "react";
import useHooks from "../../Hooks/useHooks";

const Blogs = () => {
  useHooks("Blogs");
  return (
    <div className="mt-5 p-10">
      <div class=" p-3 rounded-lg shadow-md shadow-white  ">
        <h2 className="text-3xl font-mono text-center">
          What is the Difference between SQL and NoSQL DataBase ?
        </h2>
        <div class="accordion-body py-4 px-5 text-justify">
          <strong>Difference between SQL and NoSQL:</strong> SQL is the
          programming language used to interface with relational databases.
          (Relational databases model data as records in rows and tables with
          logical links between them). NoSQL is a class of DBMs that are
          non-relational and generally do not use SQL.
        </div>
      </div>
      <div class="my-3  p-3 rounded-lg shadow-md shadow-white ">
        <h2 className="text-3xl font-mono text-center ">
          What is JWT, and how does it work?
        </h2>
        <div class="accordion-body py-4 px-5 text-justify">
          <strong>JSON Web Token and it's Works:</strong> JSON Web Token (JWT)
          is an open standard (RFC 7519) for securely transmitting information
          between parties as JSON object.It is compact, readable and digitally
          signed using a private key/ or a public key pair by the Identity
          Provider(IdP).
        </div>
      </div>
      <div class="my-3  p-3 rounded-lg shadow-md shadow-white ">
        <h2 className="text-3xl font-mono text-center ">
          What is the difference between javascript and NodeJS?
        </h2>
        <div class="accordion-body py-4 px-5 text-justify">
          <strong>Difference between javascript and NodeJS:</strong> JavaScript
          is a simple programming language that can be used with any browser
          that has the JavaScript Engine installed. Node. js, on the other hand,
          is an interpreter or execution environment for the JavaScript
          programming language.
        </div>
      </div>
      <div class="my-3  p-3 rounded-lg shadow-md shadow-white ">
        <h2 className="text-3xl font-mono text-center ">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <div class="accordion-body py-4 px-5 text-justify">
          <strong>NodeJS handle multiple requests at the same time:</strong> How
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </div>
      </div>
    </div>
  );
};

export default Blogs;
