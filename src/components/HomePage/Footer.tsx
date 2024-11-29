const Footer = () => {
  return (
    <footer className="m-auto flex w-[90%] flex-col gap-2 lg:w-[1024px]">
      <div className="lg:felx-row my-4 flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <p className="text-base font-medium text-white">Anish Budhathoki</p>

            <p className="text-base font-normal text-gray">
              anishbudhathoki50@gmail.com
            </p>
          </div>
          <p className="text-base font-normal text-white">Backend Developer</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-white lg:text-2xl">Media</p>
          <div className="flex text-gray lg:items-center lg:gap-2">
            <p>github</p>
            <p>linkedin</p>
            <p>instagram</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-2 text-base text-gray">
        <p>© Copyright 2024. Made by Anish</p>
      </div>
    </footer>
  );
};

export default Footer;
