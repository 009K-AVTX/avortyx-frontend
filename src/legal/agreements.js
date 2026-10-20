// The Terms of Service and the Privacy Policy, written for Avortyx (rendered by
// components/LegalText.jsx on /terms_of_service and /privacy_policy).
// A section is [heading, blocks]. A block is:
//   'text'                         a paragraph
//   ['sub', '1.1', 'Title', 'text'] a numbered clause
//   ['ul', ['item', ...]]          a list
//   ['strong', 'text']             a paragraph in bold, for the clauses that must stand out
//   ['address', ['line', ...]]     a postal address
// Text may link with [[label|/path]].
// A document's own `updated` date, when it has one, replaces UPDATED on it.

export const UPDATED = 'October 14, 2026'
// avortyx.com publishes no postal address; formal notices go to its contact email
const LEGAL_EMAIL = 'hello@avortyx.io'

export const TERMS = {
  title: 'Avortyx Terms of Service',
  intro: [
    'These Terms of Service (the “Terms”) set out the agreement between you and Avortyx (“we”, “us” or “our”). They govern the Avortyx platform, its web application, APIs, phone numbers and related services, and the avortyx.com website (together, the “Service”).',
    ['strong', 'Please read Section 20 closely: it sends most disputes to individual arbitration and waives class actions. Section 9 makes you responsible for claims that come from how you use the Service.'],
    'You accept these Terms when you create an account, sign an Order Form that refers to them, or otherwise use the Service. If you do not accept them, you may not use the Service. You must be an adult (18 or over) with the legal capacity to make a binding contract.',
  ],
  sections: [
    ['1. Who may use the Service', [
      ['sub', '1.1', 'Businesses only', 'The Service is for businesses and for individuals acting on behalf of a business. It is not offered for personal, family or household use.'],
      ['sub', '1.2', 'Accepting for an organization', 'If you accept these Terms for a company or other organization, you confirm that you have authority to bind it. In that case “you” means both you and that organization.'],
      ['sub', '1.3', 'Verification', 'You will give us accurate business, identity and contact details when we ask, including anything carriers need to register your numbers and traffic, and you will keep them up to date. We may refuse, suspend or close an account whose details we cannot verify.'],
    ]],
    ['2. Your account', [
      ['sub', '2.1', 'Sign-in details', 'Each user signs in with their own credentials. Do not share them, use anyone else’s, or try to get around any sign-in or access control. Tell us straight away at support@avortyx.com if you suspect someone has gained access to your account without permission.'],
      ['sub', '2.2', 'Activity on your account', 'You are responsible for everything done through your account, for the accuracy of the data in it, and for any loss Avortyx suffers because of that activity. We are not responsible for losses caused by someone using your credentials.'],
      ['sub', '2.3', 'Clients and people working for you', 'If you use the Service for clients or let contractors, agents or call centers act for you, you are responsible for them, and you will make sure they follow these Terms and the law.'],
    ]],
    ['3. Using the platform', [
      ['sub', '3.1', 'Permission to use the Service', 'While your account is in good standing, we give you a limited, non-exclusive, non-transferable and revocable right to use the Service to run your own call and messaging campaigns, or campaigns for your clients, and to view the analytics that come with them. This is permission to use the Service; it does not transfer ownership of any software.'],
      ['sub', '3.2', 'What belongs to Avortyx', 'Avortyx and its licensors own the Service, including its software, design, documentation, the AVORTYX name and logos, and any improvements or derivative works made to it by anyone. All rights not expressly given to you in these Terms are kept by Avortyx.'],
      ['sub', '3.3', 'What you may not do', 'Unless we agree in writing, you may not:'],
      ['ul', [
        'resell, sublicense, white-label or co-brand the Service, or use it to build or run a product that competes with it;',
        'copy or reuse any part of the Service, including its text, images, screens or code, except as these Terms allow;',
        'reverse engineer, decompile or disassemble the Service, or try to work out its source code, algorithms or structure;',
        'collect data from the Service with bots, scrapers or other automated tools, other than through our published APIs used as documented.',
      ]],
      ['sub', '3.4', 'Security', 'You may not overload or disrupt the Service, probe or test its security, introduce malware or spam, give anyone access to it without our permission, or forge or alter network packets, protocol headers or SIP data.'],
      ['sub', '3.5', 'Changes to the Service', 'We improve the Service all the time. We may add, change, limit or remove features, and set usage limits, at any time. Where a change materially reduces what you have paid for, we will tell you in advance where we reasonably can.'],
    ]],
    ['4. Following the law', [
      ['sub', '4.1', 'Your responsibility', 'You will use the Service only in ways that comply with every law, regulation and industry rule that applies to you. Avortyx does not tolerate unlawful traffic, and breaking the law in connection with the Service is a serious breach of these Terms. The laws that most often apply include:'],
      ['ul', [
        'the Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227, and the FCC rules at 47 C.F.R. § 64.1200;',
        'the Telemarketing Sales Rule, 16 C.F.R. Part 310;',
        'state telemarketing, “mini-TCPA” and call recording laws;',
        'the CAN-SPAM Act; and',
        'the Federal Trade Commission Act and the FTC’s rules and guidance.',
      ]],
      ['sub', '4.2', 'Prohibited activity', 'In particular, you may not use the Service to:'],
      ['ul', [
        'make calls or send messages that the law does not permit, including unwanted marketing calls, texts, voicemails or faxes;',
        'ignore an opt-out, whether a STOP reply, a spoken do-not-call request or any other way a person withdraws consent, or fail to give people a working way to opt out;',
        'collect information about people for unlawful purposes;',
        'give false or misleading information, impersonate any person or brand, or display caller ID you are not entitled to use;',
        'play or distribute audio, music or scripts you do not have the rights to use;',
        'send content that is defamatory, discriminatory, harassing or otherwise harmful;',
        'carry content about sex, hate, alcohol, firearms or tobacco, payday lending, or anything else that CTIA guidelines or our carriers do not allow;',
        'handle protected health information as defined under HIPAA;',
        'send traffic that has not been registered as carriers require, including 10DLC registration for messaging, or that breaks STIR/SHAKEN requirements; or',
        'connect to or stand in for emergency services such as 911 or E911.',
      ]],
      ['sub', '4.3', 'Documentation and lists', 'You are responsible for any registrations, filings and licenses your traffic needs, and for subscribing to the do-not-call lists that apply to you. The [[Acceptable Use Policy|/legal?doc=03]] and the [[TCPA & Consent Compliance Policy|/legal?doc=04]] set out more of what is expected.'],
    ]],
    ['5. Consent and consent records', [
      ['sub', '5.1', 'Consent first', 'Before you, or anyone acting for you, calls, texts or messages a consumer through the Service, you must have that consumer’s prior express written consent where the law requires it.'],
      ['sub', '5.2', 'Wording', 'Your consent wording must satisfy the law and must clearly name both you and Avortyx. It must cover the channels you will use (such as calls, texts, fax and instant messages), say that automated technology and prerecorded or artificial voice messages may be used, state that consent is not required to make a purchase, and include the consumer’s agreement to arbitrate disputes.'],
      ['sub', '5.3', 'What to keep', 'Keep a record of each consent for at least five (5) years, or longer if a law requires it. Each record must show the date and time of the opt-in, where it was given, the person’s first and last name, address and phone number, and any other information collected at the time.'],
      ['sub', '5.4', 'Producing records', 'If we ask for a consent record, you will give it to us within two (2) business days. You will make sure that anyone generating leads or traffic for you keeps these records too and hands them over when we ask.'],
      ['sub', '5.5', 'Suppression lists', 'If we give you a suppression list, you will check your contact lists against it at least once in any period of three (3) business days, and never call or text a number on it.'],
      ['sub', '5.6', 'Keep your own copies', 'The Service routes communications in real time; it is not an archive. Export your consent records as they are created, by API, webhook or regular exports, and store them in your own secure systems. By default the Service also removes or masks personal information, such as names, birth dates and street addresses, from inactive data and logs after ninety (90) days. You can change that period in your settings, but you are responsible for keeping whatever you need to prove compliance. We are not liable if records held only in the Service are deleted, redacted or unavailable.'],
      ['sub', '5.7', 'A privacy policy for messaging', 'To use messaging features you must publish a privacy policy on your website. It must state that you do not sell or share mobile numbers, SMS consent or opt-in data with any third party or affiliate for its marketing.'],
    ]],
    ['6. Your content and our oversight', [
      ['sub', '6.1', 'Your content', '“Content” means anything you send, route, upload or store through the Service, including calls, recordings, messages, emails, scripts, audio and lead data. You are responsible for your Content. You promise that you have the rights to it and the consents needed to use it, and that it does not infringe anyone’s privacy or other rights.'],
      ['sub', '6.2', 'Review', 'We may, but do not have to, review Content, and we may block, change or remove Content that we believe is unlawful or against these Terms. We do not check campaigns before they run and are not responsible for decisions you make based on your Content.'],
      ['sub', '6.3', 'Monitoring', 'You agree that we may monitor use of the Service to detect and stop activity that does not comply with these Terms, the law or carrier requirements.'],
      ['sub', '6.4', 'Questions and investigations', 'You will promptly answer reasonable questions from us or our carriers about your traffic and your compliance. If you learn of a lawsuit, complaint or government investigation about your marketing practices, you will tell us immediately, whether or not it involves Avortyx.'],
    ]],
    ['7. Numbers, carriers, recording and emergency calls', [
      ['sub', '7.1', 'Numbers', 'Phone numbers are assigned by carriers and regulators. You may use the numbers on your account while it is active and paid up, but you do not own them.'],
      ['sub', '7.2', 'Porting', 'You may port numbers in where the current carrier allows it, and ask to port numbers out. We will not unreasonably delay a valid port-out request; porting follows the carriers’ own processes and requires the account details they ask for. Porting numbers out does not close your account or cancel anything you owe.'],
      ['sub', '7.3', 'Your own carrier accounts', 'If you connect your own carrier account to Avortyx, such as Plivo, Telnyx or a SIP trunk, your agreement with that carrier also applies, and you are responsible for that account, its charges and its rules.'],
      ['sub', '7.4', 'Registration and caller ID', 'Carriers decide whether to approve registrations, which STIR/SHAKEN attestation level to give, how caller names (CNAM) display, how calls are labeled and whether messages are delivered. You will give complete and truthful registration information, but we cannot promise any of these outcomes.'],
      ['sub', '7.5', 'Recording and monitoring', 'Some states and countries require every party to agree before a call is recorded. You are responsible for any notice and consent each recorded, transcribed or monitored call needs, including calls with your buyers and their agents, and for telling staff when they may be monitored. Features such as per-state recording rules, recording announcements and live whisper and barge help with this but do not shift your responsibility to us.'],
      ['sub', '7.6', 'No emergency calling', 'The Service cannot be used to call 911, E911 or any other emergency number and does not replace a landline or mobile phone. Everyone who uses Avortyx numbers for you must have another way to reach emergency services. We are not liable if emergency services cannot be reached through the Service. See the [[Emergency Calling (911) Notice|/legal?doc=10]].'],
    ]],
    ['8. Fees and payment', [
      ['sub', '8.1', 'Fees', 'You will pay the fees for the Service at the rates on our [[pricing page|/pricing]] or in your Order Form, for the commitment level you choose. Fees are in U.S. dollars and do not include taxes, which you will pay. Your own internet, equipment and similar costs are yours.'],
      ['sub', '8.2', 'Billing details', 'You confirm that you are entitled to use the payment method you give us and that your billing details are accurate. We use third-party payment processors and may give them the information they need to take payment.'],
      ['sub', '8.3', 'How usage is measured', 'Usage is billed in the increments shown on the pricing page or your rate sheet. Unless your rate sheet says otherwise:'],
      ['ul', [
        'inbound calls are billed per minute, rounded up to the next full minute;',
        'outbound calls are billed with a 12-second minimum and then in 6-second increments;',
        'calls rejected because no destination is eligible are charged per call; and',
        'a per-call surcharge applies when over a fifth (20%) of the calls you attempted in the past 30 days were abandoned (unanswered, 0 seconds).',
      ]],
      ['sub', '8.4', 'Carrier charges', 'If a carrier or regulator charges administrative fees, traceback fees, fines or surcharges because of your traffic or Content, you will pay them, and you authorize us to charge them to your account or payment method.'],
      ['sub', '8.5', 'Keeping a positive balance', 'Keep your balance above zero. If it stays below $0 for ninety (90) days in a row, call recording retention on your account is cut to ninety (90) days and every recording older than that is permanently deleted.'],
      ['sub', '8.6', 'Unpaid fees', 'If your usage exceeds your deposit or you do not pay on time, we may suspend or close your account and release or reassign its phone numbers without further notice. We are not liable for the loss of data, numbers, profits or anything else that results.'],
      ['sub', '8.7', 'Refunds', 'Fees for usage are not refundable. We may refund deposits that have not been used, less any amounts you owe. The [[Billing, Cancellation & Refund Policy|/legal?doc=06]] has the details.'],
    ]],
    ['9. Your responsibility for claims', [
      'You (and your successors and permitted assigns) will defend Avortyx, together with its owners, directors, staff, agents, affiliates, contractors and licensees, and hold them harmless and compensate them, against any claim, demand, investigation, penalty, judgment, settlement, loss or cost (including reasonable attorneys’ fees and the cost of responding to subpoenas) that arises from or relates to how you, or anyone acting for you, use the Service. This includes breaches of these Terms, violations of law, and regulatory inquiries or proceedings about your traffic by any authority, including the FCC, the FTC or a state Attorney General. Avortyx may choose, at its own cost, to take over the defense of any such matter, and if it does you will cooperate fully.',
    ]],
    ['10. Term, suspension and cancellation', [
      ['sub', '10.1', 'Term', 'These Terms apply from the moment you register until your account is closed by you or by us. They end automatically if either party is wound up, dissolved or becomes insolvent.'],
      ['sub', '10.2', 'Suspension or closure by Avortyx', 'We may suspend or close your account, or end these Terms, at any time and without notice for any reason the law allows, including:'],
      ['ul', [
        'a breach of these Terms, especially Sections 4 to 6, or unpaid fees;',
        'a third-party service the Service depends on becoming unavailable to us;',
        'a request or recommendation from a regulator (such as the FCC, the FTC or a state Attorney General), the Industry Traceback Group or a carrier; or',
        'our reasonable view that your traffic creates legal, financial or reputational risk for Avortyx or its network.',
      ]],
      'Where reasonable, we will let you know afterwards.',
      ['sub', '10.3', 'Cancelling', 'You may cancel at any time from your dashboard or by contacting support. We process cancellations within three (3) calendar days. After that, recurring charges stop, and your account stays available until the end of your current billing or commitment period. You still owe all fees for usage before cancellation takes effect, including carrier charges and penalties that arrive later.'],
      ['sub', '10.4', 'When access ends', 'When your account closes, you lose access to the Service, your campaigns, call logs and recordings. We do not have to keep, export or return your data after that and may delete it permanently. Numbers you have not ported out are released to the carriers and cannot be recovered.'],
      ['sub', '10.5', 'No liability for suspension or closure', 'Avortyx is not liable to you or anyone else for losses caused by a suspension or closure under these Terms, including lost data, recordings or numbers.'],
    ]],
    ['11. Third-party services', [
      ['sub', '11.1', 'Links and content', 'The Service may show third-party content or link to other websites. We do not control or endorse them, and they have their own terms and privacy policies. You use them at your own risk.'],
      ['sub', '11.2', 'Infrastructure', 'The Service runs on independent carriers, cloud providers and other infrastructure. An outage at any of them, including power, internet or carrier outages, can interrupt the Service.'],
      ['sub', '11.3', 'Integrations you connect', 'When you connect an integration, such as a CRM, Zapier or another third-party API, that provider’s terms govern your use of it. We are not responsible for how it handles your data, and you release Avortyx from claims about data you choose to send to it, including its loss, corruption or exposure.'],
    ]],
    ['12. AI features', [
      ['sub', '12.1', 'Outputs', 'Intent scores, transcripts, summaries and other AI outputs are produced automatically and may be incomplete or wrong. Check them before relying on them for routing, payouts, compliance or decisions about people.'],
      ['sub', '12.2', 'Providers', 'Some AI features use third-party model and speech providers. Audio and transcripts sent to them are handled as the [[Privacy Policy|/privacy_policy]] and the [[AI Features Terms|/legal?doc=09]] describe.'],
      ['sub', '12.3', 'Limits', 'Do not use AI features to impersonate a real person without permission, to create content that breaks the Acceptable Use Policy, or to make decisions the law requires a person to make. If you use an artificial or AI-generated voice with consumers, you are responsible for any disclosure and consent the law requires.'],
    ]],
    ['13. Beta and preview features', [
      'Features marked beta, preview or early access are offered as they are, for evaluation. They may change or be withdrawn at any time, may be less reliable than the rest of the Service and are not covered by the Service Level Agreement. Otherwise these Terms apply to them.',
    ]],
    ['14. Confidentiality', [
      ['sub', '14.1', 'What is confidential', 'Confidential information is non-public information that one party shares with the other in connection with the Service and that is marked confidential or would reasonably be understood to be confidential, such as Order Form pricing, product plans, security details and customer data.'],
      ['sub', '14.2', 'How it is protected', 'Each party will use the other’s confidential information only for the purposes of these Terms, share it only with employees, contractors and advisers who need it and are bound by similar duties, and protect it with at least reasonable care.'],
      ['sub', '14.3', 'Exceptions', 'These duties do not cover information that becomes public without the receiving party’s fault, that the receiving party already had or developed on its own, or that it lawfully received from someone else without a duty of confidence. Either party may disclose confidential information when a law or court requires it, after telling the other party promptly where allowed.'],
    ]],
    ['15. Feedback', [
      'Ideas and suggestions you send us about the Service are ours to use for any purpose, without payment or credit to you. Feedback does not give us any right to your Content or confidential information.',
    ]],
    ['16. Communications and privacy', [
      ['sub', '16.1', 'Messages from us', 'By using the Service and giving us your contact details, you agree that Avortyx and its agents may contact you by email, phone, text message or fax about your account and our services. You can opt out of marketing messages at any time with the unsubscribe link in them or by writing to support@avortyx.com.'],
      ['sub', '16.2', 'Your data', 'The [[Privacy Policy|/privacy_policy]] explains how we collect, use and share information, and forms part of these Terms. If the two conflict, these Terms prevail.'],
      ['sub', '16.3', 'Where data is processed', 'Your information may be held and handled in the United States and in other countries where Avortyx or its providers work, and you agree to that transfer.'],
    ]],
    ['17. Copyright complaints', [
      'Avortyx respects intellectual property and follows the notice-and-takedown process of the Digital Millennium Copyright Act (DMCA). To report material on the Service that you believe infringes your copyright, send an email headed “Copyright Infringement” to support@avortyx.com that includes:',
      ['ul', [
        'the copyrighted work you believe is infringed;',
        'the material you believe infringes it and where it appears on the Service;',
        'your name, postal address, phone number and email address;',
        'a statement of your good-faith belief that neither the copyright owner, its agent nor the law permits the use;',
        'a statement, made under penalty of perjury, that the information in your notice is correct and that you own the copyright or may act for its owner; and',
        'your physical or electronic signature.',
      ]],
    ]],
    ['18. Disclaimers', [
      ['strong', 'The Service is provided “as is” and “as available”. To the extent the law allows, Avortyx makes no warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, availability, security or compatibility, and does not promise that the Service will run without interruption or errors, that it is free from viruses or other malicious code, or that every error will be corrected.'],
      ['strong', 'We do not promise any particular number of leads, calls, conversions, sales or revenue, or that campaigns you run through the Service will comply with the TCPA, the Telemarketing Sales Rule or any other law.'],
      'The Service may be unavailable during maintenance (which we may announce by email), during events described in Section 21, because of problems with your own equipment, network or internet provider, or because of outages at carriers or other providers we rely on. We are not liable for that downtime, however long it lasts.',
    ]],
    ['19. Limits on liability', [
      ['strong', 'To the fullest extent the law allows:'],
      ['ul', [
        'Avortyx is not liable for indirect, incidental, special, consequential, exemplary or punitive damages, or for lost profits, revenue, goodwill or data, even if it was told they were possible;',
        'Avortyx routes communications and is not a party to your business relationships. It is not liable for disputes between you and your buyers, publishers, clients or other third parties about lead quality, conversions or payment, or for compliance failures in your campaigns;',
        'these limits apply to every kind of claim, whether in contract, tort (including negligence), strict liability, under statute or otherwise; and',
        'the combined liability of Avortyx, its owners, directors, staff and affiliates for all claims relating to the Service or these Terms is capped at the amount you actually paid Avortyx for the Service in the twelve (12) months leading up to the claim.',
      ]],
      'You give up the benefit of any law that would otherwise stop you from releasing claims you do not yet know about. Where a law does not allow a disclaimer or limit in these Terms, it applies to the greatest extent that law permits.',
    ]],
    ['20. Disputes and arbitration', [
      ['sub', '20.1', 'Arbitration instead of court', 'Except as Section 20.2 allows, you and Avortyx agree to resolve any dispute arising from or relating to these Terms or the Service, including about their meaning or validity, only by final and binding individual arbitration. Both parties waive any right to have a judge or jury decide the dispute, and any right to bring, join or take part in a class or representative action.'],
      ['sub', '20.2', 'Exceptions', 'Either party may bring an individual claim in small claims court where it qualifies. Avortyx may ask a court for an injunction or other urgent relief to protect its intellectual property or to halt scraping, intrusions or other unauthorized access to the Service, and either party may ask a court to enforce an arbitration award.'],
      ['sub', '20.3', 'Rules and place', 'The American Arbitration Association (AAA) administers any arbitration under the Commercial Arbitration Rules in force at the time, with a single arbitrator, by video conference or, where a hearing must be held in person, in the county of Avortyx’s principal place of business. Where twenty-five (25) or more substantially similar demands are filed against Avortyx by one law firm, or by people working together or represented in a coordinated way, the AAA will handle them in batches of fifty (50), and Avortyx only has to pay filing fees for the batch currently being handled.'],
      ['sub', '20.4', 'The arbitrator’s powers', 'The arbitrator may award any relief available in law or equity, and the award is final and binding. The arbitrator may not award punitive damages unless the law that governs the claim expressly allows them, and may not make an award that goes beyond Section 19. The arbitrator will award the winning party its reasonable costs, attorneys’ fees and arbitration fees. Judgment on the award may be entered in any court with jurisdiction.'],
      ['sub', '20.5', 'One year to bring a claim', 'A party that wants to bring a claim must notify the other in writing within one (1) year, counted from the earlier of when the events giving rise to the claim happened or when the party discovered them, or reasonably should have discovered them using ordinary business care. A claim not raised in time is permanently barred.'],
    ]],
    ['21. Events beyond our control', [
      'Avortyx is not liable for any failure or delay caused by events beyond its reasonable control, including the failure or refusal of carriers, hosting providers or other suppliers; network failures, denial-of-service and other cyberattacks; pandemics and public health emergencies; government orders and changes in law; and war, terrorism, civil unrest and natural disasters. These events do not excuse you from paying fees.',
    ]],
    ['22. Export controls and sanctions', [
      'You will follow U.S. export control and sanctions laws when using the Service. You confirm that you are not located in, organized under the laws of, or ordinarily resident in a country or region under comprehensive U.S. sanctions, and that neither you nor anyone who owns or controls you appears on any U.S. government list of restricted or blocked parties. You will not let anyone in those categories use the Service through your account.',
    ]],
    ['23. Changes to these Terms', [
      ['sub', '23.1', 'Updates', 'We may revise these Terms. We will post the new version here with its effective date, and may also tell you by email or in the dashboard.'],
      ['sub', '23.2', 'When changes apply', 'Changes take effect when posted unless we give a later date. For material changes that significantly affect your rights, such as shorter data retention, we will make reasonable efforts to give you at least thirty (30) days’ notice. Using the Service after a change takes effect means you accept it.'],
      ['sub', '23.3', 'If you do not agree', 'If you do not accept a change, close your account by emailing us before it takes effect. We will refund any prepaid fees for the unused part of your period.'],
    ]],
    ['24. Notices', [
      ['sub', '24.1', 'Notices to you', 'We may send notices to the email address on your account or post them in the dashboard. They take effect when sent or posted, so keep your contact details current.'],
      ['sub', '24.2', 'Legal notices to Avortyx', 'Legal notices to Avortyx, including notices of a dispute or arbitration under Section 20, must be in writing and emailed to ' + LEGAL_EMAIL + ' with “Legal Notice” in the subject line. A notice takes effect when we confirm receipt.'],
      ['sub', '24.3', 'Everyday questions', 'For support and other everyday questions, write to support@avortyx.com. Those messages are not legal notices.'],
    ]],
    ['25. General terms', [
      ['sub', '25.1', 'Governing law and courts', 'The laws of the U.S. state in which Avortyx is organized govern these Terms, together with applicable U.S. federal law, without applying conflict-of-law principles. Neither the United Nations Convention on Contracts for the International Sale of Goods nor the Uniform Computer Information Transactions Act applies. A claim that is not arbitrated under Section 20 may be brought only in the state or federal courts serving the county of Avortyx’s principal place of business, and you agree to those courts’ jurisdiction.'],
      ['sub', '25.2', 'Policies that form part of these Terms', 'These policies in the [[Legal Center|/legal]] are part of these Terms: the Acceptable Use Policy, the TCPA & Consent Compliance Policy, the Service Level Agreement (where your plan includes it), the Billing, Cancellation & Refund Policy, the Call Recording & Data Retention Policy, the Messaging (SMS) Terms, the AI Features Terms, the Emergency Calling (911) Notice, the Cookie Policy and the Privacy Policy. If a policy conflicts with these Terms, these Terms prevail unless the policy says it overrides a specific section. An Order Form signed by both parties prevails over both.'],
      ['sub', '25.3', 'Whole agreement', 'These Terms, with the policies and any Order Form, are the complete understanding between you and Avortyx about the Service and replace any earlier discussions or agreements about it.'],
      ['sub', '25.4', 'If part is unenforceable', 'If a court or arbitrator finds part of these Terms invalid or unenforceable, that part will be applied as closely to its purpose as the law allows, and the rest of the Terms will continue in full force.'],
      ['sub', '25.5', 'Legal costs', 'In any proceeding to enforce these Terms, including arbitration, the winning party may recover its reasonable costs and attorneys’ fees.'],
      ['sub', '25.6', 'No waiver', 'If we do not enforce a right in one case, we have not given it up for that or any other case.'],
      ['sub', '25.7', 'Transfers', 'We may transfer these Terms, with or without notice, for example in a merger or sale. You may not transfer them without our written consent, and any attempt to do so is void. These Terms bind each party’s successors and permitted assigns.'],
      ['sub', '25.8', 'What continues after closure', 'Sections 3.2 to 3.4, 5.3 to 5.6, 8 (for amounts owed), 9, 10.4, 10.5, 14, 15 and 17 to 25 continue to apply after your account closes or these Terms end.'],
      ['sub', '25.9', 'Independent parties', 'You and Avortyx are independent. Nothing in these Terms makes you and Avortyx partners, joint venturers or each other’s agents, and neither of us can commit the other to anything. Each party is responsible for its own compliance with the laws that apply to its business and employees.'],
    ]],
  ],
}

export const PRIVACY = {
  title: 'Avortyx Privacy Policy',
  updated: 'October 21, 2026',
  intro: [
    'This Privacy Policy explains how Avortyx (“we”, “us” or “our”) collects, uses, shares and protects information through avortyx.com and the Avortyx call routing platform, its applications and APIs (together, the “Service”). Terms in capitals that are not defined here have the meaning given in our [[Terms of Service|/terms_of_service]].',
    'We handle information in two roles. For our website visitors and for the businesses that use Avortyx, we decide how information is used. For the consumer data our customers route through the platform (their leads, callers and messages), we act on our customers’ instructions as their service provider, and our customer is responsible for how that data is collected and used.',
    'Questions about this policy can be sent to support@avortyx.com.',
  ],
  sections: [
    ['1. Information we collect', [
      ['sub', '1.1', 'Information you give us', 'When you request access, create an account, contact us or use the Service, you may give us your name, email address, phone and fax numbers, postal address, company name and other business details, account settings, and the content of messages and support requests you send us. If you connect a social media or other third-party account, we receive the account details needed for that connection.'],
      ['sub', '1.2', 'Billing information', 'To bill you we collect billing contact details and payment card information, such as the card number and expiry date. Payments are handled with third-party payment processors.'],
      ['sub', '1.3', 'Information collected automatically', 'When you visit avortyx.com or use the Service, we receive technical information such as your IP address, domain, device and browser type, the pages you view and the links you click. Our use of cookies and similar tools is described in the [[Cookie Policy|/legal?doc=11]]: on our website these are limited to essential and functional storage and Google Analytics.'],
      ['sub', '1.4', 'The help chat', 'When you write to our team through the help chat on avortyx.com, we keep your messages, the page you started the chat on and the IP address they came from. We receive your messages and respond to you in the chat. We use the IP address to spot spam and abuse, such as automated messages or many chats started from one address, and to limit how many new chats one network can start in an hour. Chats are kept with our other support records (section 4.1).'],
      ['sub', '1.5', 'API and security logs', 'We log access to the Service and use of our APIs to keep the Service secure and working. API keys are stored encrypted.'],
      ['sub', '1.6', 'Data our customers route through Avortyx', 'Our customers use Avortyx to handle calls, messages and leads. That data can include consumers’ names, phone numbers, addresses, dates of birth and other details in lead records, together with call logs, routing details, message metadata and content, call recordings and transcripts.'],
      ['sub', '1.7', 'Children', 'The Service is for businesses and is not directed to children. We do not intend to collect personal information from anyone under 13. If we learn that we have, we delete it.'],
    ]],
    ['2. How we use information', [
      'We use information to:',
      ['ul', [
        'provide, operate and maintain the Service, including routing calls and messages as our customers configure;',
        'create and manage accounts, verify identity and register numbers and traffic with carriers;',
        'bill for the Service and collect payment;',
        'respond to requests and provide support;',
        'tell you about changes to the Service, and send marketing to business contacts, who can opt out at any time;',
        'understand how our website and Service are used so we can improve them;',
        'detect, prevent and investigate fraud, abuse, unlawful traffic and security incidents; and',
        'meet our legal obligations and enforce our agreements.',
      ]],
      ['sub', '2.1', 'AI features', 'When a customer turns on AI features such as transcription, intent scoring or summaries, we process the related call audio and message content, with our AI service providers, to produce those results. Avortyx can redact personal information from transcripts, but our customers remain responsible for any consent that recording, transcribing and analyzing their calls requires.'],
      ['sub', '2.2', 'Opt-outs and suppression lists', 'When a consumer opts out, for example by replying STOP, we keep their number on the relevant suppression list so they are not contacted again, and we may pass it to compliance services our customer chooses to connect. Because these lists exist to honor opt-outs, the numbers on them are kept even when other data is deleted.'],
    ]],
    ['3. How we share information', [
      'We do not sell personal information. We share it only as follows:',
      ['ul', [
        'Service providers that host, store, secure, support and bill for the Service, under contracts that limit how they use it.',
        'Carriers, routing partners and industry bodies, such as The Campaign Registry and the Industry Traceback Group, when needed to connect calls and messages, register traffic, apply STIR/SHAKEN and 10DLC requirements, prevent fraud and answer traceback requests.',
        'Integrations that you choose to connect, such as a CRM or Zapier. Once data reaches them, their own terms and privacy policies apply.',
        'Our support team, which may sign in to your account temporarily, with appropriate access controls, to resolve an issue you raise.',
        'Authorities and others when the law requires it, for example in response to a subpoena or court order, or when it is needed to protect the rights, property or safety of Avortyx, our customers or others, or to investigate fraud and security threats.',
        'A buyer or successor if Avortyx is involved in a merger, acquisition, financing, reorganization, insolvency or sale of assets.',
      ]],
      ['sub', '3.1', 'Our customers’ lead data', 'We do not sell, rent or supply the lead and consumer data our customers load into Avortyx to marketers, affiliates or data brokers, and we do not combine it across customers to build our own marketing lists.'],
      ['sub', '3.2', 'Mobile and SMS data', 'Mobile numbers, SMS consent and text message opt-in data are never sold or passed to any third party or affiliate for its marketing or promotions.'],
      ['sub', '3.3', 'Aggregated statistics', 'We may produce statistics, such as overall call volumes, routing speed and message delivery rates, that cannot reasonably be traced back to you, your company or any consumer, and use them to run and improve the Service, for benchmarking and in our marketing.'],
    ]],
    ['4. Keeping information', [
      ['sub', '4.1', 'Account and website data', 'Account, contact and business information is kept while your account remains open and afterwards as needed to meet legal, tax and accounting obligations, resolve disputes and enforce our agreements.'],
      ['sub', '4.2', 'Customer data', 'Our customers choose how long recordings, transcripts, call logs and lead data are kept, using the retention and auto-deletion settings in their account, and they are responsible for choosing periods that comply with the law. Recordings are kept free for ninety (90) days, and longer storage is billed as shown on the pricing page.'],
      ['sub', '4.3', 'Automatic redaction', 'By default, the platform removes or masks personal information such as names, street addresses and dates of birth from inactive data and logs after ninety (90) days. Customers can change that period in their settings.'],
      ['sub', '4.4', 'Legal holds', 'We may keep information longer when the law requires it or when it is needed for a legal claim or investigation.'],
    ]],
    ['5. Security', [
      'We protect information with encryption in transit (TLS), encrypted storage of API keys, access controls, firewalls and monitoring. No system is completely secure, so we cannot guarantee that information will never be accessed without permission. If a breach affects your personal information, we will tell you promptly, as the law requires, and work to fix its cause.',
    ]],
    ['6. Where information is processed', [
      'Avortyx is based in the United States, and information is stored and processed there and in other countries where our providers operate. If you use the Service from outside the United States, your information will be moved to and handled in the United States.',
    ]],
    ['7. Your choices and rights', [
      ['sub', '7.1', 'Marketing', 'You can stop marketing emails from us at any time with the unsubscribe link in each one or by writing to support@avortyx.com.'],
      ['sub', '7.2', 'Cookies and Do Not Track', 'You can block or delete cookies in your browser and opt out of Google Analytics with Google’s browser add-on. Our website does not currently act on the Do Not Track setting in browsers.'],
      ['sub', '7.3', 'Access and correction', 'You can see and update most account information in your dashboard, or ask us for a copy of the personal information we hold about you.'],
      ['sub', '7.4', 'U.S. state privacy rights', 'If you live in a U.S. state with a general consumer privacy law, such as California, Colorado, Connecticut, Utah and Virginia, you may be entitled to learn which personal information we collected about you over the past twelve (12) months and how we use and disclose it, to receive a copy, to have it corrected or deleted (subject to legal exceptions), and to opt out of its sale or its use for targeted advertising. We do not sell personal information or use it for cross-context behavioral advertising. We will not treat you differently for exercising these rights.'],
      ['sub', '7.5', 'Making a request', 'Send your request to support@avortyx.com, headed “Privacy Request”. We will need to confirm your identity before acting on it, and an authorized agent may make a request for you with your written permission. If we decline your request, you may ask us to reconsider by replying to our answer. If your request is about consumer data that one of our customers routes through Avortyx, we will pass it to that customer, who decides how to respond.'],
    ]],
    ['8. Other websites', [
      'Our website and the Service may link to sites and services we do not own or control. Their privacy practices are their own, so please read their policies before giving them your information.',
    ]],
    ['9. Changes to this policy', [
      'We may update this policy from time to time. We will post the new version here with its effective date and, for material changes, tell you by email, in the dashboard or on our website. Using the Service after a change takes effect means you accept the updated policy.',
    ]],
    ['10. Contact us', [
      'For questions or requests about this policy, email support@avortyx.com. Formal notices can be sent to ' + LEGAL_EMAIL + '.',
    ]],
  ],
}
