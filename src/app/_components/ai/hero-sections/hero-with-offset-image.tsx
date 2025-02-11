import { AiComponentProps } from "../base/ai-component-props";
import config from "@/settings.json";

export default function HeroWithOffsetImage({ theme }: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div
        className={`relative isolate overflow-hidden bg-gradient-to-b ${
          theme === "gradient"
            ? "from-[#ff80b540] to-[#9089fc40]"
            : theme === "dark"
              ? "from-[#0C111C]"
              : "from-primary-100/20"
        }`}
      >
        <div
          className={`absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] ${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          } shadow-xl shadow-primary-600/10 ring-1 ${
            theme === "dark" ? "ring-primary-50/10" : "ring-primary-50"
          } sm:-mr-80 lg:-mr-96`}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1
              className={`max-w-2xl text-4xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-6xl lg:col-span-2 xl:col-auto`}
            >
              {config.title ?? "We're changing the way people connect."}
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p
                className={`text-lg leading-8 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {config.subtitle ?? "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure\n" +
                  "                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam\n" +
                  "                  occaecat fugiat aliqua."}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className={`text-sm font-semibold leading-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div
          className={`absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t ${theme === "dark" ? "from-gray-900" : "from-white"} sm:h-32`}
        />
      </div>
    </div>
  );
}
