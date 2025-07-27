export default function AboutPage() {
  return (
    <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md text-center">
      <h1 className="text-3xl">About Me</h1>
      <h2 className="my-2">
        My name is Alexander. I’ve always liked programming and working with
        code. Developing web applications is what I do, and I enjoy it because
        it allows me to solve problems and create useful tools. I focus on using
        modern technologies like React to build clean and functional interfaces.
      </h2>

      <a
        href="https://github.com/godlikeAlex"
        target="_blank"
        className=" block underline"
        rel="noreferrer"
      >
        My Github
      </a>

      <a
        href="https://rs.school/courses/reactjs"
        target="_blank"
        className=" underline"
        rel="noreferrer"
      >
        RS School React Course
      </a>
    </div>
  );
}
