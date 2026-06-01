/**
 * Premium HTML Email Templates for Codemation
 * Dark luxury theme with gold accents matching the brand identity, responsive for mobile devices.
 */

const currentYear = new Date().getFullYear();

// ─── Admin Notification Email ────────────────────────────────────────
exports.adminNotificationEmail = ({ name, email, phone, company, message }) => {
    const submittedAt = new Date().toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
    });

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry — Codemation</title>
    <style>
        body { margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        table { border-spacing: 0; border-collapse: collapse; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #0a0a0a; padding-bottom: 60px; }
        .main { background-color: #111111; margin: 0 auto; width: 100%; max-width: 600px; border: 1px solid rgba(212,168,83,0.15); border-radius: 4px; overflow: hidden; }
        @media screen and (max-width: 600px) {
            .main { width: 100%; border-radius: 0; border-left: none; border-right: none; }
            .header, .content, .footer { padding-left: 20px !important; padding-right: 20px !important; }
            .grid-col { display: block; width: 100% !important; margin-bottom: 10px; }
        }
        .header { background: linear-gradient(135deg,#1a1a1a 0%,#111111 100%); padding: 32px 40px; border-bottom: 2px solid #D4A853; }
        .content { padding: 36px 40px; }
        .footer { background-color: #0a0a0a; padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.05); }
        .text-gold { color: #D4A853; }
        .text-white { color: #ffffff; }
        .text-gray { color: #cccccc; }
        .text-muted { color: #666666; }
        .field-box { background-color: #0d0d0d; border-left: 3px solid #D4A853; padding: 12px 16px; margin-bottom: 12px; }
        .field-label { font-size: 10px; font-weight: 700; color: #D4A853; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 6px; display: block; }
        .field-value { font-size: 15px; color: #ffffff; font-weight: 500; display: block; text-decoration: none; }
        .btn { display: inline-block; background-color: #D4A853; color: #0a0a0a; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 14px 36px; text-decoration: none; text-align: center; border-radius: 2px; }
    </style>
</head>
<body>
    <center class="wrapper">
        <table class="main" width="100%">
            <!-- Header -->
            <tr>
                <td class="header">
                    <table width="100%">
                        <tr>
                            <td><span style="font-size:22px;font-weight:800;color:#D4A853;letter-spacing:4px;text-transform:uppercase;">CODEMATION</span></td>
                            <td align="right"><span style="background-color:rgba(212,168,83,0.12);color:#D4A853;font-size:11px;font-weight:700;letter-spacing:2px;padding:6px 14px;border:1px solid rgba(212,168,83,0.3);text-transform:uppercase;">NEW LEAD</span></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <!-- Title -->
            <tr>
                <td class="content" style="padding-bottom: 16px;">
                    <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">New Project Inquiry</h1>
                    <p style="margin:8px 0 0;font-size:13px;color:#666666;letter-spacing:0.5px;">${submittedAt}</p>
                </td>
            </tr>
            <!-- Details -->
            <tr>
                <td class="content" style="padding-top: 0; padding-bottom: 24px;">
                    <div class="field-box">
                        <span class="field-label">FULL NAME</span>
                        <span class="field-value">${name}</span>
                    </div>
                    
                    <table width="100%">
                        <tr>
                            <td class="grid-col" width="48%" valign="top">
                                <div class="field-box" style="margin-bottom: 0;">
                                    <span class="field-label">EMAIL</span>
                                    <a href="mailto:${email}" class="field-value">${email}</a>
                                </div>
                            </td>
                            <td class="grid-col" width="4%"></td>
                            <td class="grid-col" width="48%" valign="top">
                                <div class="field-box" style="margin-bottom: 0;">
                                    <span class="field-label">PHONE</span>
                                    <a href="tel:${phone}" class="field-value">${phone}</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div style="height: 12px;"></div>
                    
                    <div class="field-box">
                        <span class="field-label">COMPANY</span>
                        <span class="field-value">${company || '—'}</span>
                    </div>

                    <div style="background-color:#0d0d0d;border:1px solid rgba(212,168,83,0.1);padding:20px;margin-top:24px;">
                        <span class="field-label">PROJECT DETAILS</span>
                        <p style="margin:0;font-size:14px;color:#cccccc;line-height:1.7;white-space:pre-wrap;">${message}</p>
                    </div>
                </td>
            </tr>
            <!-- Action -->
            <tr>
                <td class="content" style="padding-top: 0;" align="center">
                    <a href="mailto:${email}?subject=Re: Your Inquiry — Codemation" class="btn">REPLY TO INQUIRY</a>
                </td>
            </tr>
            <!-- Footer -->
            <tr>
                <td class="footer">
                    <table width="100%">
                        <tr>
                            <td><span style="font-size:11px;color:#444444;">Codemation CRM</span></td>
                            <td align="right"><span style="font-size:11px;color:#444444;">Auto-generated</span></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>`;
};


// ─── User Confirmation Email ─────────────────────────────────────────
exports.userConfirmationEmail = ({ name, phone, company, message }) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You — Codemation</title>
    <style>
        body { margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        table { border-spacing: 0; border-collapse: collapse; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #0a0a0a; padding-bottom: 60px; }
        .main { background-color: #111111; margin: 0 auto; width: 100%; max-width: 600px; border: 1px solid rgba(212,168,83,0.1); border-radius: 4px; overflow: hidden; }
        @media screen and (max-width: 600px) {
            .main { width: 100%; border-radius: 0; border-left: none; border-right: none; }
            .content, .footer, .header { padding-left: 20px !important; padding-right: 20px !important; }
        }
        .header { padding: 40px 40px 20px; text-align: center; }
        .content { padding: 20px 40px; }
        .footer { padding: 28px 40px; text-align: center; }
        .btn { display: inline-block; background-color: #D4A853; color: #0a0a0a; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 14px 40px; text-decoration: none; border-radius: 2px; }
        .step-num { display: inline-block; width: 24px; height: 24px; border-radius: 50%; background-color: rgba(212,168,83,0.15); border: 1px solid rgba(212,168,83,0.3); color: #D4A853; font-size: 12px; font-weight: 700; line-height: 24px; text-align: center; }
    </style>
</head>
<body>
    <center class="wrapper">
        <table class="main" width="100%">
            <!-- Top Line -->
            <tr><td style="height:3px;background:linear-gradient(90deg,#D4A853,#b8912e,#D4A853);"></td></tr>
            
            <!-- Header -->
            <tr>
                <td class="header">
                    <span style="font-size:26px;font-weight:800;color:#D4A853;letter-spacing:6px;text-transform:uppercase;">CODEMATION</span>
                    <p style="margin:8px 0 0;font-size:11px;color:#555555;letter-spacing:3px;text-transform:uppercase;">Premium Software House</p>
                </td>
            </tr>

            <!-- Welcome -->
            <tr>
                <td class="content" align="center" style="padding-top: 0;">
                    <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Thank You, ${name.split(' ')[0]}!</h1>
                    <p style="margin:12px auto 0;font-size:15px;color:#888888;line-height:1.6;max-width:420px;">We've received your inquiry and our team is already reviewing it. Expect a response within <strong style="color:#D4A853;">24 hours</strong>.</p>
                </td>
            </tr>

            <!-- Divider -->
            <tr><td class="content" style="padding-top:0;padding-bottom:0;"><div style="height:1px;background:linear-gradient(90deg,transparent,rgba(212,168,83,0.3),transparent);"></div></td></tr>

            <!-- Summary -->
            <tr>
                <td class="content">
                    <span style="font-size:10px;font-weight:700;color:#D4A853;letter-spacing:3px;text-transform:uppercase;display:block;margin-bottom:12px;">YOUR INQUIRY SUMMARY</span>
                    <table width="100%" style="background-color:#0d0d0d;border:1px solid rgba(255,255,255,0.05);">
                        <tr>
                            <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);" width="80"><span style="font-size:11px;font-weight:700;color:#666666;letter-spacing:1px;text-transform:uppercase;">Name</span></td>
                            <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="font-size:14px;color:#ffffff;font-weight:500;">${name}</span></td>
                        </tr>
                        <tr>
                            <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="font-size:11px;font-weight:700;color:#666666;letter-spacing:1px;text-transform:uppercase;">Phone</span></td>
                            <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="font-size:14px;color:#ffffff;font-weight:500;">${phone}</span></td>
                        </tr>
                        <tr>
                            <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="font-size:11px;font-weight:700;color:#666666;letter-spacing:1px;text-transform:uppercase;">Company</span></td>
                            <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="font-size:14px;color:#ffffff;font-weight:500;">${company || '—'}</span></td>
                        </tr>
                        <tr>
                            <td style="padding:14px 20px;vertical-align:top;"><span style="font-size:11px;font-weight:700;color:#666666;letter-spacing:1px;text-transform:uppercase;">Message</span></td>
                            <td style="padding:14px 20px;"><span style="font-size:14px;color:#cccccc;line-height:1.6;white-space:pre-wrap;">${message}</span></td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- Next Steps -->
            <tr>
                <td class="content" style="padding-top: 0;">
                    <div style="background:linear-gradient(135deg,rgba(212,168,83,0.06),rgba(212,168,83,0.02));border:1px solid rgba(212,168,83,0.12);padding:24px;">
                        <span style="display:block;font-size:10px;font-weight:700;color:#D4A853;letter-spacing:3px;text-transform:uppercase;margin-bottom:16px;">WHAT HAPPENS NEXT</span>
                        <table width="100%">
                            <tr>
                                <td width="32" valign="top" style="padding-bottom:12px;"><span class="step-num">1</span></td>
                                <td style="padding-bottom:12px;padding-left:8px;"><span style="font-size:14px;color:#cccccc;">Our team reviews your project requirements</span></td>
                            </tr>
                            <tr>
                                <td width="32" valign="top" style="padding-bottom:12px;"><span class="step-num">2</span></td>
                                <td style="padding-bottom:12px;padding-left:8px;"><span style="font-size:14px;color:#cccccc;">We schedule a discovery call to discuss your vision</span></td>
                            </tr>
                            <tr>
                                <td width="32" valign="top"><span class="step-num">3</span></td>
                                <td style="padding-left:8px;"><span style="font-size:14px;color:#cccccc;">You receive a detailed proposal and project roadmap</span></td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>

            <!-- CTA -->
            <tr>
                <td class="content" align="center" style="padding-top: 0;">
                    <a href="https://wa.me/923373096516" class="btn">CHAT ON WHATSAPP</a>
                </td>
            </tr>

            <!-- Divider -->
            <tr><td style="padding:0 40px;"><div style="height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent);"></div></td></tr>

            <!-- Footer Info -->
            <tr>
                <td class="footer">
                    <span style="display:block;font-size:18px;font-weight:800;color:#D4A853;letter-spacing:4px;margin-bottom:8px;">CODEMATION</span>
                    <p style="margin:0 0 16px;font-size:12px;color:#555555;line-height:1.6;">Premium Software Development Agency</p>
                    <p style="margin:0;font-size:12px;color:#444444;line-height:1.8;">codemation.offical@gmail.com</p>
                </td>
            </tr>

            <!-- Copyright -->
            <tr>
                <td style="background-color:#0a0a0a;padding:16px 40px;border-top:1px solid rgba(255,255,255,0.04);" align="center">
                    <p style="margin:0;font-size:10px;color:#333333;letter-spacing:0.5px;">&copy; ${currentYear} Codemation. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>`;
};
