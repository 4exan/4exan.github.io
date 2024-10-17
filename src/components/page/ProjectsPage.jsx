import ProjectCard from "../common/ProjectCard";

export default function ProjectsPage() {
  //projectName, techStack, description, imgUrl, gitLink
  return (
    <>
      <div className="p-10 bg-crust ">
        <h1 className="text-text text-3xl font-semibold p-2">Project page</h1>
        <p className="text-subtext-1">
          To make navigation thru this page easier i added markers to different
          projects so you can understand what is what.
        </p>
        <p className="text-subtext-1 text-xl">
          <span className="text-xl text-green font-semibold">{"//"}</span>-
          project marked with green border is the projects that im proud.
          Usually in this projects i tied new things that i learn.
        </p>
        <p className="text-subtext-1 text-xl">
          <span className="text-xl text-yellow font-semibold">{"//"}</span>-
          project marked with yellow border is the projects where i test some
          tools and other thing, or its a test project from some course or
          something like that.
        </p>
        <p className="text-subtext-1 text-xl">
          <span className="text-xl text-red font-semibold">{"//"}</span>-
          project marked with red border its projects that i created for fun or
          something different that studying or working. Im not gonna provide
          description for these, sorry.
        </p>
      </div>
      <div className="p-10 snap-y">
        <ProjectCard
          type="border-green"
          projectName="Twitter-clone on microservice architecture"
          techStack="Java, Spring, JWT, Kafka, Microservices, Eureka Server, API-Gateway, PostgreSQL, Redis, React, JavaScript, Docker"
          description="My first project with microservice architecture. In this project i
              tried to implement Apache Kafka for advanced and more secure
              messaging between services that supose to work with high load.
              Also implemented image save and security system with usage of JWT
              tokens and filter on API-Gateway."
          imgUrl="img/twitter-clone.png"
          gitLink="https://github.com/4exan/DemoKafkaMicroservice"
        />
        <ProjectCard
          type="border-yellow"
          projectName="Demo Microservice Security Project"
          techStack="Java, Spring, JWT, Microservices, Eureka Server, API-Gateway, PostgreSQL, Redis"
          description="Demo microservice project to test how to configure JWT authentication with microservice architecture. Created different services and configured api-gateway to filter all requests (except /login and /registration) thru Auth-filter logic."
          imgUrl="-"
          gitLink="https://github.com/4exan/DemoMicroserviceSecurity"
        />
        <ProjectCard
          type="border-green"
          projectName="Delivery Service"
          techStack="Java, Spring, Postman, JWT, JavaScrip, React, Tailwindcss, PostgreSQL"
          description="First project where i used JWT token authentication and Database tables with relations. Also first project where i implemented react-router-dom features like LINK and NAVIGATE. More complete description you can find in projects Readme on GitHub."
          imgUrl="img/delivery-service.png"
          gitLink="https://github.com/4exan/DeliveryService"
        />
        <ProjectCard
          type="border-red"
          projectName="Web text editor"
          techStack="Java, Spring"
          description="Web text editor"
          imgUrl="-"
          gitLink="https://github.com/4exan/WebTextEditor"
        />
        <ProjectCard
          type="border-yellow"
          projectName="Demo image repository"
          techStack="Java, Spring, PostgreSQL"
          description="Demo project where i tried to save pictures for future project, like profile pictures or sending between users, or just cloud image repository. Anyway good to know."
          imgUrl="-"
          gitLink="https://github.com/4exan/ImageRepositoryDemo"
        />
        <ProjectCard
          type="border-green"
          projectName="Book service"
          techStack="Java, Spring, PostgreSQL, React, Postman"
          description="First project that i made by myself after learning JavaScript and React. For this project i used datase with books info."
          imgUrl="img/book-service.png"
          gitLink="https://github.com/4exan/BookServiceREST"
        />
        <ProjectCard
          type="border-yellow"
          projectName="Travel List"
          techStack="JavaScript, React, HTML/CSS"
          description="Tutorial project that was pressented in 'The Coding Classroom' complete React course. Simple web-application/organiser that can help you get ready for travels."
          imgUrl="img/travel-list.png"
          gitLink="https://github.com/4exan/Travel-List"
        />
        <ProjectCard
          type="border-red"
          projectName="Weather.IO (Weather app)"
          techStack="JavaScript, HTML/CSS"
          description="Small web-app that shows you current weather in any city of your choice. (Have bugs, and only 2 pictures. Not finished.)"
          imgUrl="img/weather-app.png"
          gitLink="https://github.com/4exan/Weather.IO"
        />
      </div>
    </>
  );
}
