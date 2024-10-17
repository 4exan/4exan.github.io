export default function AboutPage() {
  return (
    <>
      <div className="p-10">
        <div className="m-10 p-10 bg-crust rounded-lg">
          <h1 className="text-text text-3xl font-semibold border-b-2 p-2 ">
            <span className="text-green">{`// `}</span>Ivan Chekhanovskyi
            <span className="text-sm">{`⠀⠀`}07.07.2001 (23 y.o.)</span>
          </h1>
          <div className="flex">
            <div className="w-1/2 p-4">
              <h2 className="text-2xl text-text text-center underline font-semibold">
                About
              </h2>
              <p className="text-subtext-1 text-xl">
                23 years old, software developer from Kyiv, Ukraine. Use to code
                thing in school in Small Basic language. First 'Hello World' app
                was writen at first grade in University in{" "}
                <span className="font-semibold text-sky">C++</span>.
              </p>
              <p className="text-subtext-1 text-xl">
                - In september 2022 decided to learn Java, went to online school
                <span className="font-semibold text-green">{` `}ITVDN</span> for
                Java courses.
              </p>
              <p className="text-subtext-1 text-xl">
                - February 2022 russia invaded Ukraine so courses was set on
                pause and later completely stoped.
              </p>
              <p className="text-subtext-1 text-xl">
                - From middle 2023 to early 2024 was engaged in self-development
                in <span className="text-peach font-semibold">Java Core</span>.
              </p>
              <p className="text-subtext-1 text-xl">
                - January 2024 decided to learn{" "}
                <span className="font-semibold text-green">frameworks</span> and
                start doing first desktop apps with{" "}
                <span className="font-semibold text-teal">JavaFX</span> and{" "}
                <span className="font-semibold text-red">Swing</span>.
              </p>
              <p className="text-subtext-1 text-xl">
                - June 2024, decided to learn{" "}
                <span className="text-rosewater font-semibold">
                  web-technologies
                </span>{" "}
                instead of desktop apps, started course on{" "}
                <span className="font-semibold text-green">
                  Spring Framework
                </span>
                .
              </p>
              <p className="text-xl text-subtext-1">
                - In august 2024 decided to learn basic frontend technologies
                like{" "}
                <span className="text-peach font-semibold">JavaScript</span> and{" "}
                <span className="text-blue font-semibold">React </span>
                for better understanding of web-development process.
              </p>
              <p className="text-subtext-1 text-xl mt-4">
                To this moment {` (October 2024) `} i learned and tried many
                different tools for web development. And not planing to stop.
                Want to find team, where i can use and more important improve
                all skills that i earn.
              </p>
            </div>
            <div className="w-1/2 p-4">
              <p className="text-xl text-green font-semibold">{`<contacts>`}</p>
              <div className="px-4">
                <p className="text-subtext-1 text-xl">
                  <span className="font-semibold">Email</span>:
                  ivan.chekhanovskyi@gmail.com
                </p>
                <p className="text-subtext-1 text-xl">
                  <span className="font-semibold">Telegram</span>: @qq4exan
                </p>
                <p className="text-subtext-1 text-xl">
                  <span className="font-semibold">Discord</span>: 4exan
                </p>
              </div>
              <p className="text-xl text-green font-semibold">{`</contacts>`}</p>
              <p className="text-xl text-peach font-semibold">{`<education>`}</p>
              <div className="px-4">
                <p className="text-subtext-1 text-xl font-semibold">
                  Master degree in Computer Science
                </p>
                <p className="text-subtext-1 text-xl px-4">
                  Kyiv National Economic University
                </p>
                <p className="text-subtext-1 text-xl px-4">09/2022 - 04/2024</p>
                <p className="text-subtext-1 text-xl font-semibold">
                  Educational Programme:{" "}
                </p>
                <p className="text-subtext-1 text-xl px-4">
                  Information Control Systems and Technologies
                </p>
              </div>
              <p className="text-xl text-peach font-semibold">{`</education>`}</p>
              <p className="text-xl text-mauve font-semibold">{`<skills>`}</p>
              <div className="px-4">
                <p className="text-mauve text-xl font-semibold">
                  {"<languages>"}
                </p>
                <p className="text-subtext-1 text-xl px-4">
                  Java, JavaScript, SQL
                </p>
                <p className="text-mauve text-xl font-semibold">
                  {"</languages>"}
                </p>
              </div>
              <div className="px-4">
                <p className="text-mauve text-xl font-semibold">
                  {"<technologies>"}
                </p>
                <p className="text-subtext-1 text-xl px-4">
                  {`Spring(Boot, Security, Data JPA), Hibernate, ThyMeLeaf, JavaFX, Maven, Swing, Apache Kafka, Resilience4j, JWT, React, Axios, JUnit, Postman, Git, GitHub, Bootstrap, Tailwindcss, HTML/CSS, `}
                </p>
                <p className="text-mauve text-xl font-semibold">
                  {"</technologies>"}
                </p>
              </div>
              <div className="px-4">
                <p className="text-mauve text-xl font-semibold">{`<database>`}</p>
                <p className="px-4 text-subtext-1 text-xl">
                  PostgreSQL, Redis, MongoDB
                </p>
                <p className="text-mauve text-xl font-semibold">{`</database>`}</p>
              </div>
              <div className="px-4">
                <p className="text-xl text-mauve font-semibold">{`<os>`}</p>
                <p className="px-4 text-subtext-1 text-xl ">{`Windows(XP, 7, 10, 11) / Linux (Mint, Arch)`}</p>
                <p className="text-xl text-mauve font-semibold">{`</os>`}</p>
              </div>
              <p className="text-xl text-mauve font-semibold">{`</skills>`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
