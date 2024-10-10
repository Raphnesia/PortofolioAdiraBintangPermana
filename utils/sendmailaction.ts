// File: app/api/sendMailAction.ts (or lib/sendMailAction.ts)
"use server";

import { sendMail } from "@/utils/mail";

export const sendMailAction = async (value: string) => {
  await sendMail({
    to: "ryzenaadira@gmail.com",
    name: "Random People",
    subject: "Aku Ingin Bertanya padamu tentang",
    body: value,
  });
};
