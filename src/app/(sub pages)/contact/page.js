import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            send a signal to the stars
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Connect with the cosmos and send your message into the infinite
            expanse. Whether you are looking to explore new possibilities, ask
            questions, or share your thoughts, your transmission will be
            received by our crew. Fill out the form below, and let your words
            travel light-years across the galaxy.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
