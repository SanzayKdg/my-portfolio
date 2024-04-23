import {
  Button,
  Card,
  Input,
  Textarea,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { formValidate } from "../error/error";

const Contact = () => {
  const contactRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideUp");
          entry.target.classList.remove("animate-slideDown");
        } else {
          entry.target.classList.remove("animate-slideUp");
          entry.target.classList.add("animate-slideDown");
        }
      });
    });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, [contactRef]);

  const [message, setMessage] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const form = useRef();
  const messageChangeHandler = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const validateError = formValidate(
        message.from_name,
        message.from_email,
        message.message
      );
      setError(validateError);
      if (Object.keys(validateError).length > 0) {
        return;
      }
      await emailjs.sendForm(
        "service_u92l7aa",
        "template_fnqkrlm",
        form.current,
        "Wy6RWM7YdDaaxGrwO"
      );
      setSuccess(true);
      setMessage({
        from_name: "",
        from_email: "",
        message: "",
      });
      setError({});
    } catch (error) {
      setSuccess(false);
    }
  };
  return (
    <section
      ref={contactRef}
      id="contact"
      className="w-full sm:mt-[4rem] xl:mt-[8rem] sm:px-[2rem] md:px[4rem] xl:px-[8rem]"
    >
      <Typography variant="h1" className="text-3xl text-[#147EFB]">
        Contact Me
      </Typography>
      <section className="mt-8 flex justify-between sm:flex-col sm:gap-8 xxl:flex-row">
        <section className="shadow-lg flex flex-col sm:p-2 xl:p-4 h-fit">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-3 bg-[#1480fb2c] text-[#147EFB] hover:bg-[#147EFB] hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                </TimelineIcon>
                <Typography variant="h5">Email</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  as="a"
                  href="mailto:sanjaykhadgi9861@gmail.com"
                  className="font-normal text-gray-600"
                  target="_blank"
                >
                  sanjaykhadgi9861@gmail.com
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-3 bg-[#1480fb2c] text-[#147EFB] hover:bg-[#147EFB] hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </TimelineIcon>
                <Typography variant="h5">Phone</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  as="a"
                  href="tel:+977 9861365442"
                  className="font-normal text-gray-600"
                  target="_blank"
                >
                  +977 9861365442
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className="p-3 bg-[#1480fb2c] text-[#147EFB] hover:bg-[#147EFB] hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </TimelineIcon>
                <Typography variant="h5">Location</Typography>
              </TimelineHeader>
              <TimelineBody>
                <Typography
                  as="a"
                  href="https://www.google.com/maps/place/Lalitpur,+Nepal/@27.6575387,85.2819521,12.25z/data=!4m5!3m4!1s0x39eb19d3cf18ca51:0xd10ec3d53656e18f!8m2!3d27.6575387!4d85.2819521"
                  target="_blank"
                  className="font-normal text-gray-600"
                >
                  Lalitpur, Nepal
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>

          <div className="w-full mt-8">
            <iframe
              title="My location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56542.93101046565!2d85.28195211196996!3d27.65753873528882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d3cf18ca51%3A0xd10ec3d53656e18f!2sLalitpur!5e0!3m2!1sen!2snp!4v1702390979770!5m2!1sen!2snp"
              width="600"
              height="450"
              loading="lazy"
              className="sm:w-full h-[18rem] xl:w-[25rem]"
            />
          </div>
        </section>

        <div className="w-[1.5px] bg-[#261f221a] sm:hidden xxl:block"></div>
        <section className="sm:mt-16 md:mt-8 xl:mt-0 flex-[0.8] shadow-lg p-4">
          <Card color="transparent" shadow={false} className="w-full">
            <Typography color="gray" className="mt-1 font-normal">
              Feel free to message me for any queries. I&apos;ll get back to you
              as soon as possible.
            </Typography>
            <form
              onSubmit={submitHandler}
              ref={form}
              className="mt-8 mb-2 w-full"
            >
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="John Doe"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  name="from_name"
                  type="text"
                  onChange={messageChangeHandler}
                  value={message.from_name}
                />
                {error.name && (
                  <Typography variant="small" className="text-red-600">
                    {error.name}
                  </Typography>
                )}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  placeholder="john.doe@gmail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  name="from_email"
                  onChange={messageChangeHandler}
                  value={message.from_email}
                />
                {error.email && (
                  <Typography variant="small" className="text-red-600">
                    {error.email}
                  </Typography>
                )}
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Message
                </Typography>
                <Textarea
                  rows={10}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  placeholder="Your message here..."
                  name="message"
                  onChange={messageChangeHandler}
                  value={message.message}
                />
                {error.message && (
                  <Typography variant="small" className="text-red-600">
                    {error.message}
                  </Typography>
                )}
              </div>

              <Button
                className="flex gap-4 justify-center items-center mt-6 capitalize text-lg"
                fullWidth
                type="submit"
              >
                Send Message <IoSend size={25} />
              </Button>
            </form>
          </Card>
        </section>
      </section>
      {success ? (
        <div className="px-[8rem] flex justify-center">
          <Alert
            open={success}
            onClose={() => setSuccess(false)}
            animate={{
              mount: { y: 0 },
              unmount: { y: 100 },
            }}
            color="green"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            }
            className="fixed bottom-0 z-10 w-[25rem]"
          >
            <Typography variant="h5" color="white">
              Success
            </Typography>
            <Typography color="white" className="font-normal">
              Message Sent Successfully.
            </Typography>
          </Alert>
        </div>
      ) : (
        <Alert
          open={success}
          onClose={() => setSuccess(false)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
          color="red"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          className="fixed bottom-0 z-10 w-[25rem]"
        >
          <Typography variant="h5" color="white">
            Failed
          </Typography>
          <Typography color="white" className="font-normal">
            Some Error Occurred.
          </Typography>
        </Alert>
      )}
    </section>
  );
};

export default Contact;
