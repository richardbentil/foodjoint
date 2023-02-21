import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import React from "react";
import Dishes from "./dishes";

function Home() {
	return (
		<Layout>
			<Header />
			<div className="container-fluid">
				<div className="col-md-6 my-3 d-lg-none">
					<Search />
				</div>
				<div className="my-4">
					<Dishes />
				</div>
			</div>
			<Footer />
		</Layout>
	);
}

export default Home;
