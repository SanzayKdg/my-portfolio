const openGmail = ({
  subject,
  message,
}: {
  subject: string;
  message: string;
}) => {
  const recipient = "sanjaykhadgi9861@gmail.com";

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
};

export default openGmail;
