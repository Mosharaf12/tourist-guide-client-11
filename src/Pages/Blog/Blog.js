import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const Blog = () => {
	UseTitle('Blog')
    return (
        <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blog Question section</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">1.What difference between SQL and NoSQL</h3>
				<p className="mt-1 text-gray-600">SQL is the programming language used to interface with relational databases.Relational databases model data as records in rows and tables with logical links between the function system.
                <br />
                <br />
                NoSQL database technology stores information in JSON documents instead of columns and rows used by relational databases.
                Such databases have existed since the late 1960s, but the name "NoSQL" was only coined in the early 21st century,
                </p>
			</div>
			<div>
				<h3 className="font-semibold">2.What is JWT, and how does it work?</h3>
				<p className="mt-1 text-gray-600">JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.
                <br />
                <br />
                A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange. The token is mainly composed of header, payload, signature. These three parts are separated by dots web token function.</p>
			</div>
			<div>
				<h3 className="font-semibold">3.What is the difference between javascript and NodeJS?</h3>
				<p className="mt-1 text-gray-600"> <b>Javascript</b> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                <br />
                <br />
                <b>NodeJS</b> is a cross-platform and Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

                </p>
			</div>
			<div>
				<h3 className="font-semibold">4. How does NodeJS handle multiple requests at the same time?</h3>
				<p className="mt-1 text-gray-600">js runs JavaScript code in a single thread, which means that your code can only do one task at a time. However, Node. js itself is multithreaded and provides hidden threads through the libuv library, which handles I/O operations like reading files from a disk or network more information in the code.</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Blog;