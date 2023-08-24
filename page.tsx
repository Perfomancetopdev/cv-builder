import {
  Navigation,
  Footer,
  JobSeekerProfileCard,
  SkillCardHomePage,
  BulletPoint,
  GeneralStepsCard,
} from '@emplohub/ui/server';
import {
  HomeFindDreamJobSection,
} from '@emplohub/icons/server';
import Link from 'next/link';
import Image from 'next/image'
import { Check, DownloadCloud, FileCog, FileUp, LayoutTemplate, TextQuote, UserCircle2 } from 'lucide-react';

export default async function CvBuilder() {
  return (
    <div>
      <Navigation />

      <div className="container mx-auto my-8 lg:my-16">

        <div className="px-8 flex flex-wrap justify-center pb-8 gap-8 lg:gap-24 md:gap-12 2xl:justify-between items-center">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="max-w-lg text-3xl font-bold text-black">
              Create a{' '}
              <span className="font-bold text-secondary">Professional CV</span>{' '}that <span className="font-bold text-primary">Stands Out</span>
            </h1>
            <p className="max-w-lg pt-0 text-black">
              Stand Out From the Crowd with Your CV.<br />
              Fill in our easy-to-use fields, choose a template, and download your CV in minutes.
            </p>

            <Link href="/cv-builder/builder">
              <button className="btn btn-outline w-max bg-secondary rounded-full hover:bg-primary hover:text-white">
                Build your CV
              </button>
            </Link>
          </div>

          <div className="w-96 h-96 aspect-w-16 aspect-h-6 overflow-clip sm:w-11/12 md:w-11/12 lg:w-2/4 ">
            <Image
              className='w-auto h-auto'
              src="./external/cv-builder/cv-builder-header-image.svg"
              fill={true}
              alt="Picture of the author"
            />
          </div>

          <div className="flex flex-row space-x-4"> {/* Use flex-row and space-x to display the images side by side */}
            <div className="w-96 h-96 aspect-w-16 aspect-h-6 overflow-clip sm:w-11/12 md:w-11/12 lg:w-2/4">
              <Image
                className="w-auto h-auto"
                src="./external/cv-builder/cv-1.svg"
                fill={true}
                alt="Picture of the author"
              />
            </div>

            <div className="w-96 h-96 aspect-w-16 aspect-h-6 overflow-clip sm:w-11/12 md:w-11/12 lg:w-2/4">
              <Image
                className="w-auto h-auto"
                src="./external/cv-builder/cv-2.svg"
                fill={true}
                alt="Picture of the author"
              />
            </div>

            <div className="w-96 h-96 aspect-w-16 aspect-h-6 overflow-clip sm:w-11/12 md:w-11/12 lg:w-2/4">
              <Image
                className="w-auto h-auto"
                src="./external/cv-builder/cv-3.svg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>

        <div className="p-8 my-16">
          <div className="mt-10 flex flex-col items-center gap-6">
            <h1 className="text-center text-3xl font-bold text-black">
              How to build{' '}
              <span className="font-bold text-secondary">a resume</span>{' '}
            </h1>
            <p className="max-w-3xl pt-0 text-center  text-black">
              The resume building process is simple and intuitive: Five easy steps is all it takes to get from start to finish. Resume writing can be time-consuming.
            </p>
          </div>

          <div className="container mx-auto mt-24 grid grid-cols-1 justify-center gap-20 md:grid-cols-2 lg:grid-cols-3">
            <GeneralStepsCard
              title="Begin with choosing a template"
              summary="Start by choosing a template that suits your style and highlights your skills and experience. There are many different templates available, so you can find one that fits your needs."
              icon={<LayoutTemplate className="h-9 w-9 text-black" />}
            />
            <GeneralStepsCard
              title="Add your personal info"
              summary="The information in this section should be tailored to the specific jobs you are applying for. Highlight the skills and experience that are most relevant to the jobs you are interested in."
              icon={<UserCircle2 className="h-9 w-9 text-black" />}
            />
            <GeneralStepsCard
              title="Fill in the sections"
              summary="List your skills and abilities. These can be hard skills, such as proficiency in software programs, or soft skills, such as communication and teamwork."
              icon={<TextQuote className="h-9 w-9 text-black" />}
            />
            <GeneralStepsCard
              title="Customize the layout"
              summary="The layout of your CV is important because it is the first thing that potential employers will see. A professional and easy-to-scan layout will make your CV more likely to be read and considered."
              icon={<FileCog className="h-9 w-9 text-black" />}
            />
            <GeneralStepsCard
              title="Download the CV"
              summary="Save and download your CV in a PDF format so it can be easily opened on any computer. Be sure to keep a copy of your CV on your computer and in a cloud storage service."
              icon={<DownloadCloud className="h-9 w-9 text-black" />}
            />
            <GeneralStepsCard
              title="Update CV any time"
              summary="Keep your CV up-to-date by regularly adding new accomplishments and skills. Review your CV every few months to make sure it is still relevant to your current job search. Be sure to update your CV if you have any changes in your work experience, education, or skills."
              icon={<FileUp className="h-9 w-9 text-black" />}
            />
          </div>
        </div>


        <div className="my-16 bg-primary-content p-8">
          <div className="center items container mx-auto mb-8 flex flex-wrap justify-center gap-8 md:mb-20">
            <div className="">
              <HomeFindDreamJobSection className="" />
            </div>

            <div className="mt-10 flex flex-col gap-6 ">
              <h1 className="text-3xl font-bold text-black">
                Stand out from the{" "}<span className="font-bold text-primary">crowd</span> with your{" "}
                <span className="font-bold text-secondary">CV</span>
              </h1>
              <p className="max-w-3xl pt-0 text-black">
                EmploHub CV Builder. Your personal career expert.<br />
                Cut down on writing with our easy-to-use drag-and-drop editor.
              </p>

              <ul className="">
                <li className=''><Check /><p className="text-black">Showcase your potential with a professional CV that highlights your skills and experience.</p></li>
                <li className=''><Check /><p className="text-black">Showcase your potential with a professional CV that highlights your skills and experience.</p></li>
                <li className=''><Check /><p className="text-black">Showcase your potential with a professional CV that highlights your skills and experience.</p></li>
                <li className=''><Check /><p className="text-black">Showcase your potential with a professional CV that highlights your skills and experience.</p></li>
                <li className=''><Check /><p className="text-black">Showcase your potential with a professional CV that highlights your skills and experience.</p></li>
              </ul>



              <Link href="/">
                <button className="btn btn-outline w-max bg-secondary rounded-full">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="p-8 my-16 bg-primary-content">
          <div className="mt-20 flex flex-col items-center gap-6">
            <h1 className="text-center text-3xl font-bold text-black">
              Find the{' '}
              <span className="font-bold text-secondary">Right Talent</span> for
              Your Business
            </h1>
            <p className="max-w-3xl pt-0 text-center  text-black">
              EmploHub is not just a platform for job seekers, but also a
              powerful resource for employers looking to find top talent. We
              understand that building a strong team is essential for business
              success, and we{"'"}re here to help you connect with skilled
              professionals who are the perfect fit for your company. Post your
              job openings, browse through qualified candidates, and streamline
              your hiring process with EmploHub.
            </p>
          </div>

          <div className="container mx-auto mt-24 flex w-auto justify-center">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <JobSeekerProfileCard
                fullName="Amit Mondal"
                profession="Full stack developer"
                description="Hello, I'm John Doe, a passionate and results-driven Senior Software Engineer with over 8 years of experience in the industry. I have a strong background in developing robust and scalable software solutions that meet the highest quality standards."
                skills={['C#', 'Kotlin', 'NextJs', 'JAVA', 'Linux']}
                profilePicture="/external/frame-271.png"
                isPremium={false}
              />

              <JobSeekerProfileCard
                fullName="Aldir Carrasco"
                profession="Full stack developer"
                description="Hello, I'm John Doe, a passionate and results-driven Senior Software Engineer with over 8 years of experience in the industry. I have a strong background in developing robust and scalable software solutions that meet the highest quality standards."
                skills={['C#', 'JS', 'Laravel', 'JAVA', 'Linux']}
                profilePicture="/external/frame-271.png"
                isPremium={false}
              />

              <JobSeekerProfileCard
                fullName="Saifur Shawon"
                profession="Designer"
                description="Hello, I'm John Doe, a passionate and results-driven Senior Software Engineer with over 8 years of experience in the industry. I have a strong background in developing robust and scalable software solutions that meet the highest quality standards."
                skills={['Figma', 'PS', 'Adobe AA', 'Corel Draw']}
                profilePicture="/external/frame-271.png"
                isPremium={false}
              />

              <JobSeekerProfileCard
                fullName="Svetlana Turakov"
                profession="Marketing Manager"
                description="Hello, I'm John Doe, a passionate and results-driven Senior Software Engineer with over 8 years of experience in the industry. I have a strong background in developing robust and scalable software solutions that meet the highest quality standards."
                skills={['AdTech', 'HR', 'Team Building', 'Organization']}
                profilePicture="/external/frame-271.png"
                isPremium={false}
              />

              <JobSeekerProfileCard
                fullName="Danijel Markov"
                profession="Android Developer"
                description="Hello, I'm John Doe, a passionate and results-driven Senior Software Engineer with over 8 years of experience in the industry. I have a strong background in developing robust and scalable software solutions that meet the highest quality standards."
                skills={['Kotlin', 'Java', 'CSS', 'NextJS']}
                profilePicture="/external/frame-271.png"
                isPremium={false}
              />
            </div>
          </div>
        </div>


        <div className="p-8 my-16">
          <div className="mt-20 flex flex-col items-center gap-6 ">
            <h1 className="text-center text-3xl font-bold text-black">
              Enhance{' '}
              <span className="font-bold text-secondary">Your Skills</span>
            </h1>
            <p className="max-w-3xl pt-0 text-center  text-black">
              EmploHub is more than just a job board. We believe in empowering
              job seekers with the tools and knowledge to thrive in their
              careers. Our comprehensive courses offer invaluable insights into
              creating an impressive CV, mastering interview techniques, and
              navigating the job market with confidence. Gain a competitive edge
              and unlock new opportunities through our educational resources.
            </p>
          </div>

          <div className="container mx-auto my-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SkillCardHomePage
              title="Web App Development"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sit amet lectus a ullamcorper. Ut viverra."
              icon="/external/logo.svg"
            />
            <SkillCardHomePage
              title="Modernization & Migration"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sit amet lectus a ullamcorper. Ut viverra."
              icon="/external/logo.svg"
            />
            <SkillCardHomePage
              title="Third-Party Integration"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sit amet lectus a ullamcorper. Ut viverra."
              icon="/external/logo.svg"
            />
            <SkillCardHomePage
              title="Vue.js Consulting"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sit amet lectus a ullamcorper. Ut viverra."
              icon="/external/logo.svg"
            />
            <SkillCardHomePage
              title="End-to-End Testing"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sit amet lectus a ullamcorper. Ut viverra."
              icon="/external/logo.svg"
            />
            <SkillCardHomePage
              title="Interactive Web Interfaces"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sit amet lectus a ullamcorper. Ut viverra."
              icon="/external/logo.svg"
            />
          </div>
        </div>


        <div className="p-8 my-16 mt-24">
          <div className="center items container mx-auto flex flex-wrap justify-center gap-8">
            <div className="mt-10 flex flex-col items-center gap-6 ">
              <h1 className="text-center text-3xl font-bold text-black">
                Craft a{' '}
                <span className="font-bold text-secondary">Standout CV</span>
              </h1>
              <p className="max-w-3xl pt-0 text-center  text-black">
                Your CV is your chance to make a lasting impression on potential
                employers. With our intuitive CV builder, you can effortlessly
                create professional CVs that highlight your unique skills and
                accomplishments. Choose from a variety of stunning templates and
                export your CV in PDF format, ready to impress hiring managers.
                Let our CV builder take your job applications to the next level.
              </p>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <BulletPoint text="Two-Way Data Binding" />
                <BulletPoint text="Component Development" />
                <BulletPoint text="Exceptional Performance" />
                <BulletPoint text="Data-analysis Tools" />
                <BulletPoint text="Faster and Lighter Virtual DOM" />
                <BulletPoint text="Interactive Dashboards" />
                <BulletPoint text="Flexibility" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex gap-4 flex-col">
                <div className="artboard phone-1 bg-slate-200 rounded-3xl">414×896</div>
                <div className="artboard phone-1 bg-slate-200 rounded-3xl">414×896</div>
              </div>

              <div className="flex gap-4 flex-col relative bottom-32 ">
                <div className="artboard phone-1 bg-slate-200 rounded-3xl">414×896</div>
                <div className="artboard phone-1 bg-slate-200 rounded-3xl">414×896</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" flex max-w-4xl flex-col items-center justify-center gap-8 rounded-3xl bg-error p-10">
            <p className="w-min-w-min text-center text-3xl font-bold text-white">
              Want to build awesome Resume with a Leatest experienced about
              Career?
            </p>
            <button className="btn btn-primary bg-secondary text-black rounded-full">
              Get in touch
            </button>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
}
