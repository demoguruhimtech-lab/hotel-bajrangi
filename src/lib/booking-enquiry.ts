import { z } from "zod";

const isRealCalendarDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
};

const dateField = (label: string) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required.`)
    .refine(isRealCalendarDate, `Enter a valid ${label.toLowerCase()} date.`);

export const bookingEnquirySchema = z
  .object({
    guestName: z.string().trim().min(1, "Guest name is required.").max(100),
    phone: z
      .string()
      .trim()
      .min(7, "Enter a phone number.")
      .max(20, "Phone number is too long.")
      .regex(/^[+()\d\s-]+$/, "Use digits and common phone punctuation only."),
    checkIn: dateField("Check-in"),
    checkOut: dateField("Check-out"),
    adults: z.number().int().safe().min(1, "At least one adult is required."),
    children: z.number().int().safe().min(0, "Children cannot be negative."),
    preferredRoomType: z.string().trim().max(80, "Keep this under 80 characters."),
    message: z.string().trim().max(1000, "Keep your message under 1,000 characters."),
  })
  .superRefine((booking, context) => {
    if (booking.checkIn && booking.checkOut && booking.checkOut <= booking.checkIn) {
      context.addIssue({
        code: "custom",
        path: ["checkOut"],
        message: "Check-out must be after check-in.",
      });
    }
  });

export type BookingEnquiry = z.infer<typeof bookingEnquirySchema>;