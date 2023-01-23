
type HomeProps = {
  title?: string;
}

export default ({ title }: HomeProps) => {

  return (
    <div className="w-full md:max-w-[780px] h-screen text-center">
      <div className="flex flex-col h-screen ">
        <h2>Home page</h2>
      </div>
    </div>
  );
};
