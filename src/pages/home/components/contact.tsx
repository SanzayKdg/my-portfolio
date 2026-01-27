/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TextareaInput from "@/components/ui/form/TextareaInput";
import TextInput from "@/components/ui/form/TextInput";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import {
  ContactFormSchema,
  type ContactFormSchemaType,
} from "@/schema/contact.schema";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const ContactSection = () => {
  return (
    <section id="about" className="font-inter flex flex-col gap-5 lg:gap-10">
      <div className="grid gap-4">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] tracking-[-2%] font-montserrat font-semibold">
          Contact Me
        </h2>

        <div className="flex flex-col-reverse lg:flex-row gap-8 xl:gap-12 transition-all ease-in-out duration-300">
          <ContactDetails />

          <Separator
            orientation="vertical"
            className="hidden lg:block bg-primary/20 transition-all ease-in-out duration-300"
          />

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

const ContactDetails = () => {
  return (
    <Card className="w-full lg:max-w-sm p-0 rounded-sm transition-all ease-in-out duration-300">
      <CardContent className="pt-6">
        <ContactTimeLine />
      </CardContent>

      <CardFooter className="p-0">
        <div className="w-full">
          <iframe
            title="My location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56542.93101046565!2d85.28195211196996!3d27.65753873528882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d3cf18ca51%3A0xd10ec3d53656e18f!2sLalitpur!5e0!3m2!1sen!2snp!4v1702390979770!5m2!1sen!2snp"
            width="600"
            height="450"
            loading="lazy"
            className="w-full h-72"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormSchemaType>({
    mode: "onChange",
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
  });

  const ref = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await emailjs.sendForm(
        "service_tab31wi",
        "template_yoc6qzk",
        ref.current as HTMLFormElement,
        { publicKey: "Wy6RWM7YdDaaxGrwO" },
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (error) {
      console.error(`Error sending email: ${error}`);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full lg:pt-0 transition-all ease-in-out duration-300">
      <CardHeader className="lg:pt-6 transition-all ease-in-out duration-300">
        <CardTitle className="text-[clamp(1rem,2vw,1.25rem)]">
          Get In Touch
        </CardTitle>
        <CardDescription className="text-[clamp(0.875rem,2vw,1rem)]">
          Feel free to message me for any queries. I&apos;ll get back to you as
          soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="lg:pt-6 transition-all ease-in-out duration-300">
        <form ref={ref} onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextInput
            label="Name"
            name="from_name"
            register={register}
            placeholder="John Doe"
            errors={errors}
          />

          <TextInput
            label="Email"
            name="from_email"
            type="email"
            register={register}
            placeholder="johndoe@gmail.com"
            errors={errors}
          />

          <TextareaInput
            label="Message"
            name="message"
            register={register}
            placeholder="Type your message here..."
            errors={errors}
          />

          <button
            type="submit"
            disabled={Object.keys(errors).length > 0 || !isValid}
            className="w-full bg-gray-800 text-white p-2 rounded-full cursor-pointer flex items-center gap-2 justify-center hover:bg-gray-900 h-12 transition-colors ease-linear duration-300 disabled:bg-muted-foreground/80 disabled:text-primary/50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Spinner /> Loading
              </>
            ) : (
              <>
                Send Message <Send className="size-5" />
              </>
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

const ContactTimeLine = () => {
  return (
    <div className="relative mx-auto">
      <Separator
        orientation="vertical"
        className="absolute  left-2 bg-muted w-0.5!"
      />

      {/* EMAIL */}
      <div className="relative mb-4 pl-10">
        <div className="absolute -left-2.75 flex size-10 items-center justify-center rounded-full bg-primary-foreground border-2 border-foreground">
          <Mail className="size-5" />
        </div>
        <h4 className="rounded-xl py-2 text-primary/90 md:text-xl font-medium tracking-tight">
          Email
        </h4>

        <a
          href="mailto:sanjaykhadgi9861@gmail.com"
          className="mt-4 text-primary/80 text-sm italic"
        >
          sanjaykhadgi9861@gmail.com
        </a>
      </div>

      {/* PHONE */}
      <div className="relative mb-4 pl-10">
        <div className="absolute -left-2.75 flex size-10 items-center justify-center rounded-full bg-primary-foreground border-2 border-foreground">
          <Phone className="size-5" />
        </div>
        <h4 className="rounded-xl py-2 text-primary/90 md:text-xl font-medium tracking-tight">
          Phone
        </h4>

        <a
          href="tel:+977 9861365442"
          className="mt-4 text-primary/80 text-sm italic"
        >
          +977 9861365442
        </a>
      </div>

      {/* LOCATION */}
      <div className="relative mb-4 pl-10">
        <div className="absolute -left-2.75 flex size-10 items-center justify-center rounded-full bg-primary-foreground border-2 border-foreground">
          <MapPin className="size-5" />
        </div>
        <h4 className="rounded-xl py-2 text-primary/90 md:text-xl font-medium tracking-tight">
          Location
        </h4>

        <a
          href="https://www.google.com/maps/place/Lalitpur,+Nepal/@27.6575387,85.2819521,12.25z/data=!4m5!3m4!1s0x39eb19d3cf18ca51:0xd10ec3d53656e18f!8m2!3d27.6575387!4d85.2819521"
          className="mt-4 text-primary/80 text-sm italic"
        >
          Lalitpur, Nepal
        </a>
      </div>
    </div>
  );
};
