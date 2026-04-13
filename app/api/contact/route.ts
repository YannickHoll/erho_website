import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2).max(100),
  company: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  country: z.string().min(2).max(60),
  sector: z.string().max(80).optional(),
  supportWith: z.array(z.string().max(60)).min(1).max(10),
  requirementDescription: z.string().min(10).max(2000),
  materialGrade: z.string().max(100).optional(),
  responseLanguage: z.enum(["EN", "DE", "IT", "FR"]).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "ERHO Website <noreply@erho-industry.com>",
        to: ["sales@integag.ch"],
        replyTo: data.email,
        subject: `New Enquiry — ${data.company} (${data.country}) — ${data.supportWith.join(", ")}`,
        html: buildEmailHtml(data),
      });
    } else {
      console.log("[Contact Form Submission]", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}

function buildEmailHtml(data: z.infer<typeof contactSchema>): string {
  const rows: [string, string][] = [
    ["Full Name", data.fullName],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone ?? "—"],
    ["Country", data.country],
    ["Support Needed", data.supportWith.join(", ")],
    ["Sector / Application", data.sector ?? "—"],
    ["Material Grade", data.materialGrade ?? "—"],
    ["Response Language", data.responseLanguage ?? "EN"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;color:#7A8499;font-size:13px;white-space:nowrap;background:#f5f4f0;border-bottom:1px solid #e5e7eb;">${label}</td>
        <td style="padding:8px 12px;color:#111827;font-size:13px;border-bottom:1px solid #e5e7eb;">${value}</td>
      </tr>`
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"></head>
    <body style="font-family:system-ui,sans-serif;background:#f5f4f0;margin:0;padding:24px;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:4px;overflow:hidden;border:1px solid #e5e7eb;">
        <div style="background:#1A2540;padding:24px 28px;">
          <p style="color:#C9A84C;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin:0 0 6px;font-family:monospace;">New Enquiry</p>
          <h1 style="color:#ffffff;font-size:20px;margin:0;font-family:Georgia,serif;">ERHO Industry Solutions</h1>
        </div>
        <div style="padding:0;">
          <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
        </div>
        <div style="padding:20px 28px;">
          <p style="color:#7A8499;font-size:12px;font-weight:600;margin:0 0 8px;font-family:monospace;letter-spacing:0.1em;text-transform:uppercase;">Description of Requirement</p>
          <div style="background:#f5f4f0;border-radius:4px;padding:14px;font-size:13px;color:#111827;line-height:1.6;">${data.requirementDescription.replace(/\n/g, "<br>")}</div>
        </div>
        <div style="border-top:1px solid #e5e7eb;padding:14px 28px;background:#f5f4f0;">
          <p style="margin:0;font-size:11px;color:#7A8499;">Sent from erho-industry.com — ERHO Industry Solutions</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
