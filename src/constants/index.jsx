import { RxDashboard } from "react-icons/rx";
import { MdOutlineSubscriptions } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { handshake, earn, send, trip, gifts, Home, Quiz, Learning,
  Activities, Advocate, Benefit, Profile, Logout } from "../assets";

export const navLinks = [
  {
    id: "takeQuiz",
    title: "Take Quiz",
  },
  {
    id: "login",
    title: "Login",
  },
  {
    id: "signup",
    title: "Create Account",
  },
];

export const features = [
  {
    id: "benefit-1",
    icon: handshake,
    title: "Receive a FT9JA Merchandise",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
  },
  {
    id: "benefit-2",
    icon: earn,
    title: "Earn 20% Referral Commission",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit dorelem laudina, tor iste natus mer error.",
  },
  {
    id: "benefit-3",
    icon: trip,
    title: "Win a Trip to Dubai",
    content:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
  },
  {
    id: "benefit-4",
    icon: gifts,
    title: "Special Gifts",
    content:
      "Lrem ipsum dolor sit amet, consectureur adipiscing elit. Vitae, quis lectus arcu in aliquam.",
  },
];

export const footerLinks = [
  {
    title: "HELP",
    links: [
      {
        name: "How it Works",
        link: "https://www.ft9ja.com/how-it-works/",
      },
      {
        name: "Terms & Condition",
        link: "https://www.ft9ja.com/terms-and-condition/",
      },
      {
        name: "FAQ",
        link: "https://www.ft9ja.com/faq/",
      },
    ],
  },
  {
    title: "COMPANY",
    links: [
      {
        name: "Careers",
        link: "https://www.ft9ja.com/careers/",
      },
      {
        name: "Blog",
        link: "https://www.ft9ja.com/blog/",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "+238138462394",
        link: "https://www.ft9ja.com/our-partner/",
      },
      {
        name: "info@ft9ja.com",
        link: "https://www.ft9ja.com/info@ft9ja.com/",
      },
    ],
  },
];

export const faqs = [
  {
      id: 1,
      question: 'Lorem ipsum dolor sit amet, consecuter elit. Nisi sed blandit aliquam erat sit?',
      list: '',
      lists: [
          {
              id: 1,
              title: 'STEP 1: Sign up at FT9ja.com',
              line: '',
              litems: [
                  {
                      id: 1,
                      li: 'We provide 3 Account Sizes for Traders to start with: $3,000 (N2,100,000), $5,000 (N3,500,000), and $25,000 (N17,500,000).',
                  },
                  {
                      id: 2,
                      li: 'Pay the one-time fee, and you’ll receive the login details to the server of Broker on the MT4/MT5 platform within 24 hours of purchase!',
                  },
                  {
                      id: 3,
                      li: 'This account, the ZumaRock Account, is the account you’ll begin trading with.',
                  },
              ],
          },
          {
              id: 2,
              title: 'Lorem ipsum dolor sit amet, consecuter elit. Nisi sed blandit aliquam erat sit?',
              line: 'There are 2 ways to earn:',
              litems: [
                  {
                      id: 1,
                      li: 'The first way to earn: Talent Bonus in Zuma Account.',
                      more: [
                          {
                              id: 1,
                              text: 'You can choose between the weekly or monthly payout plans.',
                          },
                          {
                              id: 2,
                              text: 'You get paid 5% of the profit at the end of the week as the Talent Bonus. Or if you choose the monthly payout plan, you get paid 10% at the end of month.',
                          },
                          {
                              id: 3,
                              text: 'Note: the Maximum Talent Bonus is 5% of the Account Size.',
                          },
                      ],
                  },
                  {
                      id: 2,
                      li: 'Second way To earn: Profit Split in Aso Account.',
                      more: [
                          {
                              id: 1,
                              text: 'Grow your Zuma Account to 25% of your starting Account Size to qualify for Aso Account.',
                          },
                          {
                              id: 2,
                              text: '80% Profit Split: if you qualify for the Aso Account within 1 months of placing your first trade.',
                          },
                          {
                              id: 3,
                              text: '60% Profit Split: if you qualify for the Aso Account within 1-3 months.',
                          },
                          {
                              id: 4,
                              text: '40% Profit Split: if you qualify for the Aso Account after 3 months.',
                          },
                      ],
                  },
              ],
          },
          {
              id: 3,
              title: 'Lorem ipsum dolor sit amet, consecuter elit. Nisi sed blandit aliquam erat sit?',
              line: 'You choose your medium of getting paid: bank account or Paypal. You choose between weekly or monthly payouts. Payouts are issued every week as you have traded for 2 separate days in the preceding week. Or monthly as long as you have traded for 10 separate days in the preceding month. It is as simple as this getting paid with FT9ja',
              litems: [],
          },
      ],
      answer: '',
  },
  {
      id: 2,
      question: 'Lorem ipsum dolor sit amet, consecuter elit. Nisi sed blandit aliquam erat sit?',
      lists: '',
      answer: '',
      list: [
          {
              id: 1,
              title: 'Maximum Daily Drawdown limit: 5%.',
          },
          {
              id: 2,
              title: 'Account DrawDown Limit: 10%.',
          },
          {
              id: 3,
              title: 'Minimum Trading Days: 2 days a week and 10 days a month.',
          },
      ],
  },
  {
      id: 3,
      question: 'Lorem ipsum dolor sit amet, consecuter elit?',
      lists: '',
      list: '',
      answer: `Every Trader starts with a ZumaRock Account. ZumaRock Accounts are the gateway to AsoRock Accounts. Although ZumaRock Accounts are demo accounts, you still get paid 5% weekly or 10% monthly on the profit you make! That's the Talent Bonus.`,
  },
  {
      id: 4,
      question: 'Lorem ipsum dolor sit amet?',
      lists: '',
      answer: '',
      list: [
          {
              id: 1,
              title:
                  'Aso Accounts are live accounts successful Zuma Account Traders are eligible for by positively growing their accounts to 25% over time (no time limits). Aso Account Traders are FT9ja Traders! They are Traders that have proven to be in the league of the best Traders in Nigeria. Aso Account Traders get paid up to 80% of the profit.',
          },
          {
              id: 2,
              title:
                  'Account can be compounded to 2X of the original Account Size. For example, a $25,000 account can be compounded to up to $50,000.',
          },
      ],
  },
  {
      id: 5,
      question: 'Lorem ipsum dolor sit amet, consecuter elit. Nisi sed blandit aliquam erat sit?',
      lists: '',
      answer: '',
      list: [
          {
              id: 1,
              title: `No, we are not.`,
          },
          {
              id: 2,
              title: `We have accounts with third-party Brokers which we give our Traders access to.`,
          },
      ],
  },
  {
      id: 6,
      question: 'Lorem ipsum dolor sit amet, consecuter elit. aliquam erat sit?',
      lists: '',
      answer: '',
      list: [
          {
              id: 1,
              title: `No. You are not “investing” any money into our company or into any trading account.`,
          },
          {
              id: 2,
              title: `At FT9ja, we invest our funds into talented, profitable, and reliable Traders. We discover our AsoRock Traders by onboarding them through ZumaRock Account which is a simulated/demo trading account. Traders get paid even during the onboarding period!`,
          },
      ],
  },
];

export const SidebarLinks = [
  {
    title: ' ',
    links: [
      {
        name: 'Overview',
        route: 'overview',
        icon: <img src={Home} alt="Overview" className="w-[23px] h-[23px]" />
      },
      {
        name: 'Quiz',
        route: 'quiz',
        icon: <img src={Quiz} alt="quiz" className="w-[23.71px] h-[28.05px]" />
      },
      {
        name: 'Learning',
        route: 'learning', 
        icon: <img src={Learning} alt="learning" className="w-[23.2px] h-[22.9px]" />
      },
      {
        name: 'Activities',
        route: 'activities',
        icon: <img src={Activities} alt="activities" className="w-[20px] h-[18px]" />
      },
      {
        name: 'Advocate',
        route: 'advocate',
        icon: <img src={Advocate} alt="advocate" className="w-[16px] h-[18px]" />
      },
      {
        name: 'Benefits',
        route: 'benefits',
        icon: <img src={Benefit} alt="benefits" className="w-[18.37px] h-[19px]" />
      },
      {
        name: 'Profile',
        route: 'profile',
        icon: <img src={Profile} alt="profile" className="w-[16px] h-[18px]" />
      },
      {
        name: 'Log out',
        icon: <img src={Logout} alt="logout" className="w-[18px] h-[18px]" />
      },
    ],
  },
]