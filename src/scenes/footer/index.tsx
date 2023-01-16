import Logo from "@/assets/Logo4.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          We’re intentionally crafting each group as we roll out this new structure, and we’ll welcome more people off the list as capacity increases. The earlier you sign up, the sooner you’ll be able to participate.
          </p>
          <p>© Evolve All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">www.evolve.org</h4>
          <p className="my-5">@evolveclub</p>
          <p className="my-5">@evolve.co</p>
          <p></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Become an Evolve member and make progress on your terms.</p>
          <p>(+91)908-678-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;