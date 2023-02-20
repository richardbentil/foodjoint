import Head from "next/head";
import Script from "next/script";
import React from "react";

function Layout({ children }: any) {
	return (
		<>
			<Head>
				<title>Food Joint</title>
				<meta name="description" content="Food delivery app" />
			</Head>
			<Script src="/js/bootstrap.bundle.min.js" />
			{children}
		</>
	);
}

export default Layout;
