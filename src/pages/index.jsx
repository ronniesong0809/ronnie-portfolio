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
          Hello, <br /> I'm Ronnie Song
        </BigTitle>
        <Subtitle>I'm a CS graduate student who make good stuff.</Subtitle>
      </Hero>

      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Phone Bill App"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            link="https://ronniesong0809.github.io/Phonebill-App/"
          >
            An Android Phone Bill that allows its users to creating a phone bill, entering calls, pretty printing a
            phone bill and its calls, searching for calls, etc
          </ProjectCard>

          <ProjectCard
            title="Freeway Analysis Dashboard"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            link="https://portland-freeway.herokuapp.com/"
          >
            A dashboard system that determine detectors are malfunction by analysis of the data from the freeway dataset
          </ProjectCard>

          <ProjectCard
            title="recipe dashboard"
            bg="linear-gradient(to right, #009245 0%, #ECB111 100%)"
            link="https://recipedashboard.herokuapp.com/"
          >
            A dashboard that allows its users to search an recipe. Built by React, Edamam API, Nutritionix API, Yelp API
            and hosted on Heroku
          </ProjectCard>

          <ProjectCard
            title="Scanner webapp"
            bg="linear-gradient(to right, #D585FF 0%, #006FEE 100%)"
            link="https://scanner-webapp.herokuapp.com/"
          >
            A web Document scanner that allows its users to align an image. Built by Python, Flask, gunicorn, Bootstrap
            Framework, OpenCV, pdf2image, img2pdf and hosted on Heroku
          </ProjectCard>

          <ProjectCard
            title="plte cli"
            bg="linear-gradient(to right, #344ceb 0%, #d334eb 100%)"
            link="https://ronniesong0809.github.io/plte-cli/"
          >
            A Rust based Command-line tool sets that provided scraping PLET (Portland Local Tech Events) data from
            Calagator, saving it as cvs file, import csv it to update MongoDB collection, display documents, and more
          </ProjectCard>

          <ProjectCard
            title="battlecode20 RADS"
            bg="linear-gradient(to right, #349ceb 0%, #009245 100%)"
            link="https://ronniesong0809.github.io/battlecode20-RADS"
          >
            RADS is an AI player for Battlecode 2020 real-time strategy game. Implemented in java
          </ProjectCard>

          <ProjectCard
            title="FTP Client"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            link="https://psu-agile-group.github.io/FTP-Client/"
          >
            A FTP client group projects. Built by Java, Apache Commons NetTM, and Travis-CI
          </ProjectCard>

          <ProjectCard
            title="Beautiful Portland"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            link="https://gold-team-pdx.github.io/beautiful-portland/"
          >
            A website and CMS for Beautiful Portland non-profit organization. Built by Nodejs, create-react-app,
            Semantic-UI, and Jenkins, then hosting on AWS
          </ProjectCard>

          <ProjectCard
            title="Happy Chat"
            bg="linear-gradient(to right, #009245 0%, #ECB111 100%)"
            link="https://agile-tor-53744.herokuapp.com/"
          >
            A chat client group project built by Nodejs, socket.io, and OpenCV as login authentication
          </ProjectCard>

          <ProjectCard
            title="My Recipe"
            bg="linear-gradient(to right, #D585FF 0%, #006FEE 100%)"
            link="https://ronniesong0809.github.io/My-Recipe/"
          >
            A web-based recipe built by Python, SQLite, Flask, Google APIs and Yelp API
          </ProjectCard>
        </ProjectsWrapper>

        <Coursework>
          <ProjectCard
            title="Relevant Coursework"
            bg="linear-gradient(to right, #103d12 0%, #102d3d 100%)"
            link="https://drive.google.com/file/d/1lZZPXglC0sSRVt5HGka_F6IPWwnN-6PW/view"
            noIcon
          >
            <div>
              <b>SDE</b> <br />
              Software Engineering, Software Implementation and Test, Unit Testing, Agile Development, Advanced Java
              Development, Open Source Development <br />
              <br />
              <b>WDE</b> <br />
              Internet and Cloud System, Full Stack Development, Front-end Web Tech, Web and Cloud Security, Web
              development-Lynda.com
              <br />
              <br />
              <b>Other</b> <br />
              Computer Vision, Machine Learning, Artificial Intelligence, Malware Reverse Engineering, Blockchain
              Security, Algorithms-MIT
            </div>
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
          Ronnie began programming in C during high school and has since expanded to C++, Java, Python, JavaScript, Java
          and Go.
        </AboutDesc>
      </About>

      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="https://fir-lab-ronsong-8377c.firebaseapp.com/">Hi</a>, send me an{' '}
            <a href="mailto:ronniesong0809@gmail.com">email</a>, or find me on:{' '}
            <a href="https://github.com/ronniesong0809">Github</a> | <a href="https://www.linkedin.com">LinkedIn</a> |{' '}
            <a href="https://www.instagram.com/ronnie_song89/">Instagram</a> <br />
            Download my <a href="https://drive.google.com/file/d/1lZZPXglC0sSRVt5HGka_F6IPWwnN-6PW/view">Résumé</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Ronnie Song. Made by Gatsby.</Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
