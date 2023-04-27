import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/Header';
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div className="w-full bg-bodyColor text-white px-4 ">
      {/* header */}
      <Header/>
      <Banner />
      <Features />
      <Projects />
      <Resume />
      <Contact />
      {/* Hero */}
      {/* about */}
      {/* products */}
      {/* Projects */}
      {/* Services */}
      {/* Contact-us */}  
    </div>
  )
}
