import Home1 from './assets/home1.png';
import Card from './components/Card/Card';
import SkillLeftImage from './assets/skill-left.png';
import AboutImage from './assets/about.png';
import { projects } from './constants/data';
import Contact from './components/HomePage/Contact';
import Footer from './components/HomePage/Footer';
// import { useState } from 'react';

function App() {
  // const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="">
      <div className="m-auto flex w-[90%] flex-col gap-10 lg:w-[1024px]">
        <div className="flex flex-col flex-wrap p-1 lg:h-[61px] lg:flex-row lg:items-end lg:justify-between">
          <h1 className="font-firacode text-base font-bold text-white">
            Anish Budhathoki
          </h1>
          <ul className="flex flex-col flex-wrap justify-between gap-4 text-base font-medium lg:flex-row lg:items-end">
            <li className="text-white">#home</li>
            <li>#about-me</li>
            <li>#portfolio</li>
            <li>#experience</li>
            <li>#certification</li>
            <li>#education</li>
            <li>#contact</li>
          </ul>
        </div>
        <div className="flex h-[431px] flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-1 flex-col items-start justify-center gap-4">
            <h5 className="font-firacode text-3xl font-semibold">
              Anish is a<span className="text-primary"> Backend Developer</span>
            </h5>
            <div className="flex flex-col items-start gap-2 text-base font-medium">
              <p className="text-gray">
                Experienced Node JS Backend Engineer skilled in building robust
                web applications using MongoDB, postgres, Express, React.js and
                Node.js. Proficient in creating professional web solutions with
                a strong focus on system operations. Passionate about delivering
                user-centric experiences through technology and dedicated to
                crafting high-quality applications.
              </p>
              <button className="border border-primary p-2 text-white">
                Contact me!!
              </button>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col items-center justify-end">
            <img src={Home1} alt="" />
            <div className="flex items-center justify-start gap-2 border border-gray">
              <div className="ml-2 h-4 w-4 bg-primary"></div>
              <p className="text-base font-medium text-gray">
                Currently working on
                <span className="font-semibold text-white">
                  {' '}
                  TechJar Pvt.Ltd
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <p className="border border-gray p-4 text-2xl font-medium text-white">
              With great power comes great electricity bill
            </p>
            <p className="self-end border border-gray p-2 text-2xl font-light text-white">
              - Dr. Who
            </p>
          </div>
        </div>
        {/* projects section */}
        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-1 items-center justify-between gap-4">
                <h3 className="text-3xl font-medium text-white">
                  <span className="text-primary">#</span>projects
                </h3>
                <div className="min-w-fit flex-1 border border-t border-primary"></div>
              </div>
              <div className="flex flex-1 items-center justify-end">
                <button className="text-white">View all</button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {projects.map((data, i) => (
                <Card key={i} data={data} />
              ))}
            </div>
          </div>
        </div>
        {/* skills section */}
        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-1 items-center justify-between gap-4">
                <h3 className="text-3xl font-medium text-white">
                  <span className="text-primary">#</span>skills
                </h3>
                <div className="min-w-fit flex-1 border border-t border-primary"></div>
              </div>
              <div className="flex flex-1 items-center justify-end">
                <button className="text-white">View all</button>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-36">
              <img
                className="hidden md:block lg:block"
                src={SkillLeftImage}
                alt=""
              />
              <div className="flex flex-1 flex-col gap-6">
                <div className="flex items-center justify-end gap-2">
                  <div className="flex flex-col">
                    <p className="border border-gray text-base font-semibold text-white">
                      Languages
                    </p>
                    <p className="border border-gray text-base font-normal text-gray">
                      Javascript Typescript NodeJs
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="border border-gray text-base font-semibold text-white">
                      Languages
                    </p>
                    <p className="border border-gray text-base font-normal text-gray">
                      Javascript Typescript NodeJs
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="border border-gray text-base font-semibold text-white">
                      Languages
                    </p>
                    <p className="border border-gray text-base font-normal text-gray">
                      Javascript Typescript NodeJs
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <div className="flex flex-col">
                    <p className="border border-gray text-base font-semibold text-white">
                      Languages
                    </p>
                    <p className="border border-gray text-base font-normal text-gray">
                      Javascript Typescript NodeJs
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="border border-gray text-base font-semibold text-white">
                      Languages
                    </p>
                    <p className="border border-gray text-base font-normal text-gray">
                      Javascript Typescript NodeJs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-1 items-center justify-start gap-4">
                <h3 className="text-3xl font-medium text-white">
                  <span className="text-primary">#</span>about-me
                </h3>
                <div className="w-1/3 border border-t border-primary"></div>
              </div>
            </div>
            <div className="md:flew-row flex w-full flex-col flex-wrap justify-center md:gap-40 lg:flex-row lg:gap-40">
              <div className="flex flex-1 flex-col items-start justify-start gap-4 text-base font-normal text-gray">
                <p>Hello, i’m Anish!</p>
                <p>
                  I’m a self-taught back-end developer based in Kathmandu,
                  Nepal. I can develop backend services from scratch and raise
                  them into modern web systems.
                </p>
                <p>
                  Transforming my creativity and knowledge into a websites has
                  been my passion for over a year. I have been helping various
                  clients to establish their presence online. I always strive to
                  learn about the newest technologies and frameworks.
                </p>
                <button className="border border-primary px-6 py-2 text-base font-medium text-white">
                  Read More
                </button>
              </div>
              <div className="relative h-[380px] flex-1">
                <img
                  className="absolute -top-16 right-0 hidden h-[440px] md:block lg:block"
                  src={AboutImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* contact section */}
        <Contact />
      </div>
      <div className="border border-t border-gray"></div>
      <Footer />
    </div>
  );
}

export default App;
