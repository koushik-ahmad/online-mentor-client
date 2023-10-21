import React from 'react';
import { Accordion } from 'flowbite-react';
import useTitle from '../../../hooks/useTitle';


const Blog = () => {
    useTitle('Blog');

    return (
        <div className='lg:w-8/12 md:w-9/12 px-8 mx-auto pt-8 pb-20'>
            <h2 className='text-center text-3xl text-success font-semibold pb-5'>Frequently Asked Questions</h2>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title className='text-success'>
                        Difference between SQL and NoSQL
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            SQL (Structured Query Language) and NoSQL are two types of database management systems. SQL databases are relational and use structured tables to store data, making them suitable for complex queries and ensuring data integrity. NoSQL databases are non-relational, offering flexibility for unstructured or semi-structured data.
                            They excel at handling large volumes of data, have horizontal scalability, and can be optimized for specific use cases like document stores, key-value pairs, or graph databases. SQL databases are ideal for structured data and complex transactions, while NoSQL databases are best for unstructured or rapidly changing data, like those found in web applications and big data analytics.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='text-success'>
                        What is JWT, and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            JWT, or JSON Web Token, is a compact, self-contained way to represent information securely. It's commonly used for authentication and authorization in web applications. JWTs consist of three parts: a header specifying the token type and signing algorithm, a payload containing claims or user data, and a signature to verify the token's authenticity.
                            To create a JWT, the server encodes the header and payload, then signs them with a secret key. The client receives the JWT, which can be included in requests. Upon receiving the JWT, the server can verify its authenticity by recalculating the signature using the secret key, ensuring the data hasn't been tampered with.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='text-success'>
                        What is the difference between javascript and NodeJS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            JavaScript and Node.js are closely related but serve different purposes:
                            <br />
                            JavaScript:
                            Client-Side Language: JavaScript is primarily used on the client side within web browsers. It's responsible for adding interactivity, animations, and dynamic content to web pages.
                            Front-End: It's a core technology for front-end web development, enabling features like DOM manipulation and event handling in web applications.
                            Runs in Browsers: JavaScript runs in web browsers, executing code in response to user interactions.
                            <br />
                            Node.js:
                            Server-Side Runtime: Node.js, on the other hand, is a server-side runtime environment that allows you to execute JavaScript outside the browser.
                            Back-End: It's used for building server-side applications like web servers and APIs, enabling developers to write server-side code using JavaScript.
                            Uses V8 Engine: Node.js is built on the V8 JavaScript engine and provides features and libraries for server-side development.
                            In summary, while JavaScript is primarily used for client-side web development, Node.js extends its use to server-side applications, making it possible to write JavaScript for both front-end and back-end development.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='text-success'>
                        How does NodeJS handle multiple requests at the same time?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Node.js employs an event-driven, non-blocking I/O model to handle multiple requests concurrently. When a request arrives, Node.js registers a callback function to handle it and doesn't block the main thread. Instead, it continues processing other requests.
                            When the requested operation, like file I/O or a database query, is complete, Node.js triggers the corresponding callback.This asynchronous approach allows Node.js to efficiently manage numerous simultaneous requests, making it suitable for highly scalable applications.
                            Additionally, it utilizes a single-threaded event loop and can leverage features like the cluster module to take advantage of multi-core processors, further enhancing its ability to handle concurrent requests.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;