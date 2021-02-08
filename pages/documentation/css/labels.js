import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import LabelsCode from "components/Documentation/CSS/LabelsCode.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function Labels() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/labels"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/labels"
        />
        <title>CSS Label & Badge | Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Navbar fixed />
      <div className="container mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <div className="my-8">
              <Heading
                title="Labels"
                description="You can insert these greate components anywhere. You can add them on your buttons, to show a number of notifications or to showcase some special feature."
              />
              <SmallHeading
                title="Simple"
                description="These labels feature a rounded corner."
              />
              <LabelsCode
                copyText={copy === "Rounded" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Rounded" : "")}
              />
              <SmallHeading
                title="Round"
                description="These labels feature a full round corner."
              />
              <LabelsCode
                copyText={copy === "Round" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Round" : "")}
                round
              />
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
