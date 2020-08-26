import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const Coursework = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(1, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Ronnie Song.
        </BigTitle>
        <Subtitle>I'm a graduate student in computer science who make good stuff.</Subtitle>
      </Hero>

      <Projects offset={1}>
        <Title>Projects</Title>
        
        <ProjectsWrapper>
          <ProjectCard 
            title="FTP Client" 
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)" 
            link="https://psu-agile-group.github.io/FTP-Client/"
          >
            A simple FTP client group projects. Built by Java, Apache Commons NetTM, and Travis-CI
          </ProjectCard>

          <ProjectCard 
            title="Portland Local Tech Event" 
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)" 
            link="https://ronniesong0809.github.io/portland-local-tech-event/"
          >
            A Portland local tech event Google map built by web-crawler. Crawling from Calagator.org
          </ProjectCard>
          
          <ProjectCard 
            title="Beautiful Portland" 
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)" 
            link="https://gold-team-pdx.github.io/beautiful-portland/"
          >
            A website and CMS for Beautiful Portland non-profit organization. Built by Nodejs, create-react-app,
            Semantic-UI, and Jenkins, then hosting on AWS
          </ProjectCard>
          
          <ProjectCard 
            title="Happy Chat" 
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)" 
            link="https://psu-oss-group.github.io/happy-chat/"
          >
            A chat client group project built by Nodejs, socket.io, and OpenCV as login authentication
          </ProjectCard>
          
          <ProjectCard 
            title="Firebase Chat" 
            bg="linear-gradient(to right, #344ceb 0%, #d334eb 100%)" 
            link="https://ronniesong0809.github.io/firebase-chat/"
          >
            A chat client built by firebase, GCP, and use Google+ as login authentication
          </ProjectCard>
          
          <ProjectCard 
            title="My Recipe" 
            bg="linear-gradient(to right, #349ceb 0%, #34eb89 100%)" 
            link="https://ronniesong0809.github.io/My-Recipe/"
          >
            A web-based recipe built by Python3, Flask, Google APIs and Yelp API
          </ProjectCard>
          
          <ProjectCard 
            title="ChocAn" 
            bg="linear-gradient( 91.7deg, #171213 16.8%, #b35670 103.6% )" 
            link="https://github.com/ronniesong0809/ChocAn"
          >
            A health care system. Built by .Net, C#, and MySQL
          </ProjectCard>
          
          <ProjectCard 
            title="Npm Demo: Is-Even" 
            bg="linear-gradient(to right, #acc906 0%, #e86499 100%)" 
            link="https://ronniesong0809.github.io/npm_demo_is_even"
          >
            A npm package demo. Built by Nodejs, mocha, Travis-CI, and Coveralls
          </ProjectCard>
        </ProjectsWrapper>

        <Coursework>
          <ProjectCard title="Relevant Coursework" bg="linear-gradient(to right, #103d12 0%, #102d3d 100%)">
            Agile Development, Open Source Development, Unit Testing, Web Security, AI, Full Stack Development, Software
            Engineering, Internet and Cloud System, Data Structures, Computational Structures, Discrete Structures,
            Principles of Programming Languages, Operating Systems, Algorithms, Database Systems. Algorithms-MIT, Web
            development-Lynda.com
          </ProjectCard>
        </Coursework>
      </Projects>

      <About offset={3}>
        <Title>About</Title>
        
        <AboutHero>
          <Avatar src={avatar} alt="Ronnie Song" />
          <AboutSub>
            <p>{':(){:|:&};:'}</p>
          </AboutSub>
        </AboutHero>
        
        <AboutDesc>
          Ronnie began programming in C during high school and has since expanded to C++, Java, Python, JavaScript, C#
          and Go.
        </AboutDesc>
      </About>

      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <p>
              Say <a href="https://fir-lab-ronsong-8377c.firebaseapp.com/">Hi</a>, send me an{' '}
              <a href="mailto:ronniesong0809@gmail.com">email</a>, or find me on:{' '}
              <a href="https://github.com/ronniesong0809">Github</a> |{' '}
              <a href="https://www.linkedin.com">LinkedIn</a> |{' '}
              <a href="https://www.instagram.com/ronnie_song89/">Instagram</a>
            </p>
            <p>
              {'    '}Download my <a href="https://drive.google.com/file/d/1lZZPXglC0sSRVt5HGka_F6IPWwnN-6PW/view">Résumé</a>
            </p>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Ronnie Song. Made by Gatsby.</Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
