export default function HomePage() {
  return (
    <>
      <div className="p-10">
        <div className="m-10 p-10 bg-crust rounded-lg">
          <h1 className="text-3xl font-semibold text-green">
            <span className="text-green">{`// `}</span>Hello!
          </h1>
          <p className="text-subtext-1 mt-2">
            My name is{" "}
            <span className="font-semibold text-white">Ivan Chekhanovskyi</span>{" "}
            and i am
            <span className="font-semibold text-white">
              {" "}
              Junior Java Back-end developer
            </span>
            !
          </p>
          <p className="text-subtext-1">
            I made this small web-app to show off my skills and for much easier
            overview of my projects.
          </p>
          <p className="text-subtext-1">
            You can navigate on this project thru navbar on top.
          </p>
          <p className="text-subtext-1 mt-4">
            Small overwiev what you can find here:
          </p>
          <ul>
            <li className="w-1/3">
              <p className="text-subtext-1">
                <span className="text-yellow font-semibold text-xl">
                  - About me:
                </span>{" "}
                CV-like page with information about me as an Java Developer, my
                career in development, reccent achivements and contacts in case
                you want to cooperate or just say "Hi".
              </p>
            </li>
            <li className="w-1/3 mt-2">
              <p className="text-subtext-1">
                <span className="text-yellow font-semibold text-xl">
                  - Projects:
                </span>{" "}
                Page with list and short description of my recent projects. Also
                each project have link to its source code, tech stack and
                purpose of it.
              </p>
            </li>
          </ul>
          <p className="text-subtext-1 mt-4">
            In future i may update this app with new pages and projects and
            other so its always can be actual.
          </p>
          <button className=" p-2 rounded-lg transition-all bg-peach hover:bg-sky font-semibold">
            Home
          </button>
        </div>
      </div>
    </>
  );
}
