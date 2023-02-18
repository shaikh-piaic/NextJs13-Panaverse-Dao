"use client";

import About from "@/components/About";
import Core from "@/components/Core";
import Description from "@/components/Description";
// import Navbar from "@/components/Navbar";
import Hero2 from "@/components/Hero2";
import Outcome from "@/components/Outcome";
import Program from "@/components/Program";
import Study from "@/components/Study";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<Hero2 />
			<Box as='main' w='100%'>
				<About />
				<Description />
				<Study />
				<Core />
				<Program />
				<Outcome />
			</Box>
		</>
	);
}
