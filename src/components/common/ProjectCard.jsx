export default function ProjectCard({
  type,
  projectName,
  techStack,
  description,
  imgUrl,
  gitLink,
}) {
  return (
    <div className="opacity-50 hover:opacity-100 transition-all snap-center scroll-smooth">
      <div className={` ${type} border-2 p-4 rounded-lg bg-crust my-4`}>
        <h1 className="text-3xl text-text font-semibold p-2">{projectName}</h1>
        <div className="flex">
          <div className="w-1/3 p-4 bg-base rounded-lg">
            {imgUrl === "-" ? (
              <p className="text-subtext-0  text-center text-3xl font-semibold">
                {" "}
                No image
              </p>
            ) : (
              <img
                src={imgUrl}
                alt="ProjectPicture"
                className="h-72 rounded-lg"
              />
            )}
          </div>
          <div className="w-2/3 ml-2 p-4 bg-base rounded-lg">
            <div className="">
              <p className="text-xl text-text font-semibold">Technologies:</p>
              <p className="text-text">{techStack}</p>
            </div>
            <div className="mt-2">
              <p className="text-xl text-text font-semibold">Description:</p>
              <p className="text-text">{description}</p>
            </div>
            <div className="p-2 mt-2 bg-green rounded-lg w-fit font-semibold transition-all hover:bg-peach">
              <a href={gitLink}>Link to GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
