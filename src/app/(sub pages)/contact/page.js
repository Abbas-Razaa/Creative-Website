import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
const Satellite = dynamic(() => import("@/components/models/Satellite"), {
  ssr: false,
});
export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <RenderModel>
        <Satellite />
      </RenderModel>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-page font-semibold text-center text-4xl capitalize">
            {/* Beam Your Message Into the Galaxy */}
            Send Your Message
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            {/* Connect with the cosmos and send your message into the infinite
            expanse. Whether you are looking to explore new possibilities, ask
            questions, or share your thoughts, your transmission will be
            received by our crew. Fill out the form below, and let your words
            travel light-years across the galaxy. */}
            Send your thoughts or questions, and I’ll make sure they’re heard. Whether you’re seeking guidance, sharing ideas, or just reaching out, I’m here to listen. Use the form below to send your message into the vast beyond.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
