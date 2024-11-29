const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-1 items-center justify-start gap-4">
            <h3 className="text-3xl font-medium text-white">
              <span className="text-primary">#</span>contacts
            </h3>
            <div className="w-1/3 border border-t border-primary"></div>
          </div>
        </div>
        <div className="mb-8 flex flex-col items-center justify-start lg:flex-row lg:gap-60">
          <p className="flex-1 text-justify text-base font-medium text-gray">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <div className="flex flex-1 items-center justify-end">
            <div className="flex flex-col gap-2 border border-gray p-2">
              <p className="text-base font-semibold text-white">
                Message me here
              </p>
              <p className="text-base font-normal text-gray">
                anishbudhathoki50@gmail.com
              </p>
              <p className="text-base font-normal text-gray">@insta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
