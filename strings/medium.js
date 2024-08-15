function maskEmail(email) {
    const [username, domain] = email.split('@');
    const maskedUsername = username[0] + '*****';
    return `${maskedUsername}@${domain}`;
  }

  const email = "bilaljhandir007@gmail.com";
  const maskedEmail = maskEmail(email);
  console.log(maskedEmail);