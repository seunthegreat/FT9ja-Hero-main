import { RxDashboard } from "react-icons/rx";
import { MdOutlineSubscriptions } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { handshake, earn, send, trip, gifts, Home, Quiz, Learning,
  Activities, Advocate, Benefit, Profile, Logout, benefitOne, benefitTwo } from "../assets";

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
        name: 'Benefit',
        route: 'benefit',
        icon: <img src={Benefit} alt="benefit" className="w-[18.37px] h-[19px]" />
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
];

//--Profile information--//
export const user = {
  firstName : "Samuel",
  lastName : "Abilawon",
  email : "seun.thedeveloper@gmail.com",
  phoneNumber : "+2348168051751"
};

export const profileFields = [
  {id: 'fName', label: "First Name",},
  {id: 'lName', label: "Last Name"},
  {id: 'email', label: "Email address"},
  {id: 'phone', label: "Phone number"}
];

//--Benefits--//

export const ambassadorshipBenefits = [
  {
    title: 'Exclusive access to trading tools and resources',
    date: '2020-01-01',
    image: benefitOne
  },
  {
    title: 'Invitation to monthly webinars with industry experts',
    date: '2020-03-01',
    image: benefitTwo
  },
  {
    title: 'Discount on trading fees',
    date: '2020-06-01',
    image: benefitOne
  },
  {
    title: 'Personalized one-on-one coaching with a senior trader',
    date: '2020-09-01',
    image: benefitTwo
  },
  {
    title: 'Free subscription to a premium market analysis newsletter',
    date: '2020-12-01',
    image: benefitOne
  },
  {
    title: 'Priority support from a dedicated customer service team',
    date: '2021-03-01',
    image: benefitTwo
  },
  {
    title: 'Exclusive invitation to in-person events and meetups',
    date: '2021-06-01',
    image: benefitOne
  },
  {
    title: 'Discount on trading education courses',
    date: '2021-09-01',
    image: benefitTwo
  },
  {
    title: 'Opportunity to participate in beta testing of new trading technologies',
    date: '2022-01-01',
    image: benefitOne
  },
  {
    title: `Recognition on the company's website as a top-tier trading ambassador`,
    date: '2022-03-01',
    image: benefitTwo
  }
];

//--Activities --//

export const activities = [
  {
    title: 'Organize a workshop on currency trading strategies',
    date: 'January 10, 2023',
    id: 1,
    image: 'https://pixabay.com/photos/workshop-team-meeting-business-847940/'
  },
  {
    title: 'Host a webinar on the economic factors that impact forex markets',
    date: 'February 5, 2023',
    id: 2,
    image: 'https://pixabay.com/photos/webinar-online-education-conference-3577343/'
  },
  {
    title: 'Conduct a seminar on risk management in forex trading',
    date: 'March 15, 2023',
    id: 3,
    image: 'https://pixabay.com/photos/seminar-education-teaching-training-3693238/'
  },
  {
    title: 'Lead a discussion group on technical analysis techniques',
    date: 'April 10, 2023',
    id: 4,
    image: 'https://pixabay.com/photos/discussion-business-meeting-team-1245776/'
  },
  {
    title: 'Host a networking event for forex traders and investors',
    date: 'May 20, 2023',
    id: 5,
    image: 'https://pixabay.com/photos/networking-business-people-meeting-1245776/'
  },
  {
    title: 'Collaborate with local schools or universities to promote financial literacy and education',
    date: 'June 5, 2023',
    id: 6,
    image: 'https://pixabay.com/photos/university-students-study-education-1245776/'
  },
  {
    title: 'Participate in online forums and social media groups to provide guidance and support to traders',
    date: 'July 15, 2023',
    id: 7,
    image: 'https://pixabay.com/photos/social-media-internet-communication-1245776/'
  },
  {
    title: 'Attend industry conferences and events to stay up-to-date on the latest developments in the forex market',
    date: 'August 10, 2023',
    id: 8,
    image: 'https://pixabay.com/photos/conference-room-business-meeting-1245776/'
  },
  {
    title: 'Create educational content, such as videos or blog posts, to share knowledge and insights with traders',
    date: 'September 5, 2023',
    id: 9,
    image: 'https://pixabay.com/photos/education-learning-school-teaching-1245776/'
  },
];

//--Quiz--//

export const choicesLabel = (index) => {
  if (index == 0 ) return 'A';
  if ( index == 1 ) return 'B';
  if ( index == 2 ) return 'C';
  if ( index == 3 ) return 'D';
  if ( index == 4 ) return 'E';
};

export const quiz = [  
  { 
    id: 123,
    question: 'What is the capital of France?',    
    choices: ['Paris', 'London', 'New York', 'Berlin'],
    answer: 'Paris'
  },
  {
    id: 123,
    question: 'What is the capital of Italy?',
    choices: ['Rome', 'Paris', 'Madrid', 'Berlin'],
    answer: 'Rome'
  },
  {
    id: 123,
    question: 'What is the capital of Spain?',
    choices: ['Madrid', 'Paris', 'Rome', 'Berlin'],
    answer: 'Madrid'
  },
  {
    id: 123,
    question: 'What is the capital of Germany?',
    choices: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    answer: 'Berlin'
  },
  {
    id: 123,
    question: 'What is the capital of the United Kingdom?',
    choices: ['London', 'Paris', 'Rome', 'Berlin'],
    answer: 'London'
  }
];

export const months = [
  { id: 1, label: "January", value: "Jan" },
  { id: 2, label: "February", value: "Feb" },
  { id: 3, label: "March", value: "Mar" },
  { id: 4, label: "April", value: "Apr" },
  { id: 5, label: "May", value: "May" },
  { id: 6, label: "June", value: "Jun" },
  { id: 7, label: "July", value: "Jul" },
  { id: 8, label: "August", value: "Aug" },
  { id: 9, label: "September", value: "Sep" },
  { id: 10, label: "October", value: "Oct" },
  { id: 11, label: "November", value: "Nov" },
  { id: 12, label: "December", value: "Dec" }
];

//--Learning--//

export const forexVideos = [
  {
    id: 1,
    title: "Introduction to Forex Prop Trading",
    link: "https://www.youtube.com/watch?v=z7538iNe2Pw&t=46s",
    category: "Basics"
  },
  {
    id: 2,
    title: "Understanding Forex Market Trends",
    link: "https://www.youtube.com/watch?v=dszHdcMG7d4",
    category: "Technical Analysis"
  },
  {
    id: 3,
    title: "Risk Management",
    link: "https://www.youtube.com/watch?v=s8wC6U7QJmQ",
    category: "Risk Management"
  },
  {
    id: 4,
    title: "Using Technical Analysis",
    link: "https://www.youtube.com/watch?v=lGhFX4Pwj6Y",
    category: "Technical Analysis"
  },
  {
    id: 5,
    title: "Fundamental Analysis",
    link: "https://www.youtube.com/watch?v=aod3cyUEu4k",
    category: "Fundamental Analysis"
  },
  {
    id: 6,
    title: "Trading Strategies",
    link: "https://www.youtube.com/watch?v=ofiGdsNqTP4",
    category: "Strategies"
  },
];

export const tabs = [
  {id: 0, label: "All", value: 'all'},
  {id: 1, label: "In Progress", value: 'inProgress'},
  {id: 2, label: "Completed", value: 'completed'},
  {id: 3, label: "New", value: 'new'},
];

export const userProgress = [
  { id: 1, status: 100 },
  { id: 2, status: 80 },
  { id: 3, status: 20 },
  { id: 4, status: 0 },
  { id: 5, status: 0 },
];

//--General--//

export const messages = {
  learning: {
    tip: {
      title: "Welcome to our learning Page!",
      body: `We've compiled a series of videos to help you understand 
        the key elements of successful promotional campaigns and how to effectively market our brand. Whether you're new 
        to the industry or an experienced trader, these resources will provide valuable 
        insights and tips to help you succeed. We hope you find these videos helpful and informative.`
    }
  }
};

export const tips = {
  learning: {
    general:  {
      title: "Welcome to our Learning Page!",
      body: `We've compiled a series of videos to help you understand 
        the key elements of successful promotional campaigns and how to effectively market our brand. Whether you're new 
        to the industry or an experienced trader, these resources will provide valuable 
        insights and tips to help you succeed. We hope you find these videos helpful and informative.`
    },
  },
  activities: {
    general:  {
      title: "Welcome to the Activities Page!",
      body: `Here you can view the list of activities that need to be completed within the specified period of time. 
        Each activity will require you to upload a proof of advocacy to show that you have completed it. By completing 
        these activities, you will be eligible for certain rewards. Let's get started!`
    },
  },
  advocate: {
    general:  {
      title: "Welcome to the Advocacy Page!",
      body: `We appreciate your support for our brand, and we're excited to provide you with an easy way to submit proof 
      of your advocacy. By sending us images and videos of you promoting our brand, you'll be able to maintain your 
      advocacy status, which will provide you with exclusive privileges. Let's get started!`
    },
  },
  benefits: {
    general:  {
      title: "Welcome to the Benefits Page!",
      body: `We're excited to offer you a variety of rewards for being a part of our platform. Here, you'll find information 
        about the exclusive privileges, updates, souvenirs, gifts, and prizes that you can earn. By being a member of our platform, 
        you'll have access to exclusive content, discounts and more. We hope you enjoy the rewards that come with being a part 
        of our community! Let's check it out!`
    },
  },
  quiz: {
    general: {
      title: "Welcome to our Quiz Page!",
      body: `This quiz will determine your eligibility to receive stipends for a given month. Take a look at the 
      calendar "History" below to get summary regarding the quiz for the month and check your eligibility status. The pass
      mark for the quiz is set at 60% and you are given unlimited attempts only within a month. Good luck, and let's get started!`
    },
    beforeQuiz: 'Take a quiz and score over 60% to become eligible for your monthly stipends!',
    quizStarted: 'Take your time, focus on the question and make sure you are confident in your answer before submitting. Remember, you have a limited time to complete the quiz, so use it wisely.',
    afterQuiz: 'Click on the calendar month to display quiz summary!',
    failedQuiz: 'You were unable to redeem your stipends due to a low score in your quiz!',
  },
};

//--General
export const tableFields = {
  benefitsHistory: {
    stipends: [
      {id: 0, label: "Date"},
      {id: 1, label: "Status"},
      {id: 2, label: "Amount"},
    ],
    commissions: [
      {id: 0, label: "Referee"},
      {id: 1, label: "Amount"},
      {id: 2, label: "Date"},
      {id: 3, label: "Status"},
    ],
    merch: [
      {id: 0, label: "Name"},
      {id: 1, label: "Date"},
      {id: 2, label: "Method"},
      {id: 3, label: "Quantity"},
      {id: 4, label: "Status"},
    ],
    gifts: [
      {id: 0, label: "Name"},
      {id: 1, label: "Earned"},
      {id: 2, label: "Expires"},
      {id: 3, label: "Status"},
    ],
  },
  advocate: {
    fields:  [
      {id: 0, label: "Name"},
      {id: 1, label: "Date"},
      {id: 2, label: "Type"},
      {id: 3, label: "Status"},
    ],
  },
  activityHistory: {
    activities:  [
      {id: 0, label: "Name"},
      {id: 1, label: "Date"},
      {id: 2, label: "Type"},
      {id: 3, label: "Status"},
    ],
  }
};

export const selectionData = {
  historyTypes: [
    { "label": "Total Stipend", "value": "stipend" },
    { "label": "Referral Commission", "value": "commission" },
    { "label": "FT9a Merch", "value": "merch" },
    { "label": "Gifts and Offers", "value": "gifts" },
  ],
};

export const mock = {
  benefits: {
    paymentHistory : [
      { "id": 1, "date": "01/01/2022", "status": "approved", "amount": 40000},  
      { "id": 2, "date": "01/02/2022", "status": "declined", "amount": 40000 },  
      { "id": 3, "date": "01/03/2022", "status": "approved", "amount": 40000 },
      { "id": 4, "date": "01/04/2022", "status": "approved", "amount": 40000 },
      { "id": 5, "date": "01/05/2022", "status": "pending", "amount": 40000 }
    ],
    commissionHistory : [
      { id: 1, referee: "John Smith", amount: "10000", date: "01/01/2023", status: "pending" },
      { id: 2, referee: "Jane Doe", amount: "10000", date: "01/01/2023", status: "approved" },
      { id: 3, referee: "Bob Johnson", amount: "10000", date: "01/01/2023", status: "pending" },
      { id: 4, referee: "Emily Davis", amount: "10000", date: "01/01/2023", status: "approved" },
      { id: 5, referee: "Michael Brown", amount: "10000", date: "01/01/2023", status: "pending" },
      { id: 6, referee: "Sarah Miller", amount: "10000", date: "01/01/2023", status: "approved" },
      { id: 7, referee: "David Wilson", amount: "10000", date: "01/01/2023", status: "pending" },
      { id: 8, referee: "Jessica Moore", amount: "10000", date: "01/01/2023", status: "approved" }
    ],
    merchHistory : [
      { "id": 1, "name": "T-Shirt", "date": "01/5/2023", "method": "Referral Commission", "quantity": 2, "status": "pending" },
      { "id": 2, "name": "Coffee Mug", "date": "01/5/2023", "method": "Promotion", "quantity": 1, "status": "pending" },
      { "id": 3, "name": "Water Bottle", "date": "01/5/2023", "method": "Points Redemption", "quantity": 1, "status": "shipped" },
      { "id": 4, "name": "Hoodie", "date": "01/5/2023", "method": "Referral Commission", "quantity": 1, "status": "pending" }, 
      { "id": 5, "name": "Poster", "date": "01/5/2023", "method": "Points Redemption", "quantity": 2, "status": "shipped" }
    ],
    giftHistory :[],
  },
  advocate: {
    history:  [
      { "id": 1, "name": "Proof 1", "date": "01/5/2023", "type": "Image", "status": "successful" },
      { "id": 2, "name": "Proof 2", "date": "01/5/2023", "type": "Image", "status": "successful" },
      { "id": 3, "name": "Proof 3", "date": "01/5/2023", "type": "Video", "status": "successful" },
      { "id": 4, "name": "Proof 4", "date": "01/5/2023", "type": "Image", "status": "failed" }, 
      { "id": 5, "name": "Proof 5", "date": "01/5/2023", "type": "Video", "status": "failed" }
    ],
  },
  activities: {
    data: [
      { "id": 1, "name": "Proof 1", "date": "01/5/2023", "type": "Image", "status": "successful" },
      { "id": 2, "name": "Proof 2", "date": "01/5/2023", "type": "Image", "status": "successful" },
      { "id": 3, "name": "Proof 3", "date": "01/5/2023", "type": "Video", "status": "successful" },
    ],
  }
}