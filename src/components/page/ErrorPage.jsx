export default function ErrorPage() {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black">
        <p className="text-3xl text-yellow font-semibold">{`<p>`}</p>
        <h1 className="text-text text-3xl font-semibold">
          No such page, brother, go back...
        </h1>
        <p className="text-3xl text-yellow font-semibold">{`</p>`}</p>
      </div>
    </>
  );
}
