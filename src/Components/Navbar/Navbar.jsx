import NavigationBtn from "./NavigationBtn";

export default function Navbar() {
  return (
    <div>
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <a
                href=""
                className="navbar-logo block w-60 max-w-full px-4"
              >
                <img
                  src="https://raw.githubusercontent.com/MorshedSiam03/Real-Estate-LWS-A1/refs/heads/main/src/assets/images/logo/logo.svg"
                  alt="logo"
                  className="header-logo h-12"
                />
              </a>

              <ul className="hidden lg:flex ">
                <NavigationBtn value='Home' link="#home"/>
                <NavigationBtn value='About' link="#about"/>
                <NavigationBtn value='Pricing' link="#pricing"/>
                <NavigationBtn value='Blog' link="#blog"/>
              </ul>

              <div className="flex">
                <a
                  href="signin.html"
                  className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </a>
                <a
                  href="signup.html"
                  className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
