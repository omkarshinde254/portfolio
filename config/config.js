
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Omkar",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Omkar",
	description: "A Software Engineer | Full Stack Developer | AI Enthusiast",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1mZQhMWQ_X-63JNNarAAnl8_bkHOVE8s6/view?usp=drive_link",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a graduate student pursing Masters in Computer Science from Binghamton University (Expected May-2024. Having spent four years as a Senior Full Stack Developer at Vistaar Technologies, I possess a strong proficiency in Python, JavaScript, and various frameworks. As a published author of an IEEE paper on 'Smart Assistant device for Blind People,' I am passionate about utilizing technology to create meaningful solutions. Beyond work, I actively engage with communities, mentor aspiring developers, and advocate for diversity in the tech industry. In my leisure time, you can find me immersed in Dota 2, cycling, and participating in hackathons to explore innovative ideas.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Full Stack Developer",
			description: "I create dynamic web applications using MERN stack, Django and Tailwind CSS.",
			icons: null,
		},
		{
			title: "AI Developer",
			description: "I create AI models using Python and TensorFlow to solve real world problems.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "NASA APOD",
			description: "A MERN stack web application that fetches NASA's Astronomy Picture of the Day (APOD) and displays it on the website. The app also allows users to search for APODs by date.",
			icons: [
				{
					icon: faGlobe,
					link: "https://nasa-apod-mocha.vercel.app/",
				},
				{
					icon: faGithub,
					link: "https://github.com/omkarshinde254/nasa_apod",
				},
			]
		},
		{
			title: "Pacman AI",
			description: "A Pacman game that uses Reinforcement Learning (Q-Learning) to train the Pacman agent to play the game.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/omkarshinde254/Pacman-Reinforcement_Learning-Q_Learning",
				},
			]
		},
		{
			title: "Visually Sorted",
			description: "A web application in Django that visualizes various sorting algorithms",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/omkarshinde254/VisuallySorted",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate.. Alternatively, feel free to reach out directly by email at omkarshinde254@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:omkarshinde254@gmail.com",
			isPrimary: true,
		}
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Omkar Shinde | A Software Engineer | Full Stack Developer | AI Enthusiast",
	description: "I create web applications and AI models ",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@omkarshinde",
	description: "Software Engineer | Full Stack Developer | AI Enthusiast",
	cards: [
		{
			title: "My website",
			link: "https://github.com/omkarshinde254/portfolio",
		},
		{
			title: "My GitHub",
			link: "https://github.com/omkarshinde254/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/omkarshinde254/",
		},
		{
			title: "My Resume",
			link: "https://drive.google.com/file/d/1mZQhMWQ_X-63JNNarAAnl8_bkHOVE8s6/view?usp=drive_link",
		}
	]
}