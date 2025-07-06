import { PresidentModel } from "../interfaces/president-model";

export const PRESIDENTS: PresidentModel[] = [
  {
    id: 1,
    name: 'George Washington',
    party: 'Independent',
    image: 'assets/images/presidents/George_Washington.jpg',
    periodInOffice: ['1789-1797'],
    description: 'First president of the United States.',
    notableAchievements: [
      'Led the Continental Army to victory in the American Revolutionary War',
      'Presided over the Constitutional Convention of 1787',
    ],
    isSeen: false
  },
  {
    id: 2,
    name: 'John Adams',
    party: 'Federalist',
    image: 'assets/images/presidents/John_Adams.jpg',
    periodInOffice: ['1797-1801'],
    description: 'Second president and a key figure in the founding of the nation.',
    notableAchievements: [
      'Played a leading role in advocating for independence',
      'Helped draft the Declaration of Independence',
    ],
    isSeen: false
  },
  {
    id: 3,
    name: 'Thomas Jefferson',
    party: 'Democratic-Republican',
    image: 'assets/images/presidents/Thomas_Jefferson.jpg',
    periodInOffice: ['1801-1809'],
    description: 'Principal author of the Declaration of Independence.',
    notableAchievements: [
      'Completed the Louisiana Purchase',
      'Commissioned the Lewis and Clark Expedition',
    ],
    isSeen: false
  },
  {
    id: 4,
    name: 'James Madison',
    party: 'Democratic-Republican',
    image: 'assets/images/presidents/James_Madison.jpg',
    periodInOffice: ['1809-1817'],
    description: 'Known as the "Father of the Constitution".',
    notableAchievements: [
      'Led the nation during the War of 1812',
      'Co-authored the Federalist Papers',
    ],
    isSeen: false
  },
  {
    id: 5,
    name: 'James Monroe',
    party: 'Democratic-Republican',
    image: 'assets/images/presidents/James_Monroe.jpg',
    periodInOffice: ['1817-1825'],
    description: 'Presided over the "Era of Good Feelings".',
    notableAchievements: [
      'Issued the Monroe Doctrine',
      'Acquired Florida from Spain',
    ],
    isSeen: false
  },
  {
    id: 6,
    name: 'John Quincy Adams',
    party: 'Democratic-Republican',
    image: 'assets/images/presidents/John_Quincy_Adams.jpg',
    periodInOffice: ['1825-1829'],
    description: 'Son of John Adams and skilled diplomat.',
    notableAchievements: [
      'Negotiated the Treaty of Ghent to end the War of 1812',
      'Advocated for internal improvements and a national university',
    ],
    isSeen: false
  },
  {
    id: 7,
    name: 'Andrew Jackson',
    party: 'Democratic',
    image: 'assets/images/presidents/Andrew_Jackson.jpg',
    periodInOffice: ['1829–1837'],
    description: 'Seventh president known for his populist approach and founding the Democratic Party.',
    notableAchievements: [
      'Implemented the Indian Removal Act leading to the Trail of Tears',
      'Vetoed the recharter of the Second Bank of the United States',
    ],
    isSeen: false
  },
  {
    id: 8,
    name: 'Martin Van Buren',
    party: 'Democratic',
    image: 'assets/images/presidents/Martin_Van_Buren.jpg',
    periodInOffice: ['1837–1841'],
    description: 'Eighth president and key organizer of the Democratic Party.',
    notableAchievements: [
      'Faced the Panic of 1837, a major economic crisis',
      'Maintained a policy of neutrality in foreign affairs',
    ],
    isSeen: false
  },
  {
    id: 9,
    name: 'William Henry Harrison',
    party: 'Whig',
    image: 'assets/images/presidents/William_Henry_Harrison.jpg',
    periodInOffice: ['1841'],
    description: 'Ninth president with the shortest tenure, dying 31 days into his term.',
    notableAchievements: [
      'Delivered the longest inaugural address in U.S. history',
      'First president to die in office, prompting constitutional questions about succession',
    ],
    isSeen: false
  },
  {
    id: 10,
    name: 'John Tyler',
    party: 'Whig',
    image: 'assets/images/presidents/John_Tyler.jpg',
    periodInOffice: ['1841–1845'],
    description: 'Tenth president who assumed office after Harrison’s death.',
    notableAchievements: [
      'Annexed Texas into the United States',
      'Faced opposition from his own party, leading to his expulsion from the Whig Party',
    ],
    isSeen: false
  },
  {
    id: 11,
    name: 'James K. Polk',
    party: 'Democratic',
    image: 'assets/images/presidents/James_Polk.jpg',
    periodInOffice: ['1845–1849'],
    description: 'Eleventh president known for territorial expansion of the U.S.',
    notableAchievements: [
      'Oversaw the Oregon Territory settlement',
      'Led the nation during the Mexican-American War, acquiring California and much of the Southwest',
    ],
    isSeen: false
  },
  {
    id: 12,
    name: 'Zachary Taylor',
    party: 'Whig',
    image: 'assets/images/presidents/Zachary_Taylor.jpg',
    periodInOffice: ['1849–1850'],
    description: 'Twelfth president and national war hero from the Mexican-American War.',
    notableAchievements: [
      'Took a moderate stance on slavery, angering Southern politicians',
      'Died 16 months into his term, leading to Millard Fillmore’s presidency',
    ],
    isSeen: false
  },
  {
    id: 13,
    name: 'Millard Fillmore',
    party: 'Whig',
    image: 'assets/images/presidents/Millard_Fillmore.jpg',
    periodInOffice: ['1850–1853'],
    description: 'Thirteenth president who assumed office after Taylor’s death.',
    notableAchievements: [
      'Signed the Compromise of 1850, including the Fugitive Slave Act',
      'Opened trade relations with Japan through Commodore Perry’s expedition',
    ],
    isSeen: false
  },
  {
    id: 14,
    name: 'Franklin Pierce',
    party: 'Democratic',
    image: 'assets/images/presidents/Franklin_Pierce.jpg',
    periodInOffice: ['1853–1857'],
    description: 'Fourteenth president whose policies exacerbated sectional tensions.',
    notableAchievements: [
      'Signed the Kansas-Nebraska Act, leading to violent conflict over slavery',
      'Supported the Gadsden Purchase, facilitating southern transcontinental railroad',
    ],
    isSeen: false
  },
  {
    id: 15,
    name: 'James Buchanan',
    party: 'Democratic',
    image: 'assets/images/presidents/James_Buchanan.jpg',
    periodInOffice: ['1857–1861'],
    description: 'Fifteenth president preceding the Civil War, criticized for inaction.',
    notableAchievements: [
      'Did not prevent the secession of Southern states',
      'Supported the Dred Scott decision, inflaming abolitionist sentiment',
    ],
    isSeen: false
  },
    {
    id: 16,
    name: 'Abraham Lincoln',
    party: 'Republican',
    image: 'assets/images/presidents/Abraham_Lincoln.jpg',
    periodInOffice: ['1861–1865'],
    description: '16th president, led the U.S. through the Civil War.',
    notableAchievements: [
      'Issued the Emancipation Proclamation',
      'Preserved the Union during the American Civil War',
    ],
    isSeen: false
  },
  {
    id: 17,
    name: 'Andrew Johnson',
    party: 'Democratic (National Union)',
    image: 'assets/images/presidents/Andrew_Johnson.jpg',
    periodInOffice: ['1865–1869'],
    description: 'Succeeded Lincoln after his assassination and oversaw early Reconstruction.',
    notableAchievements: [
      'First U.S. president to be impeached (but acquitted by the Senate)',
      'Vetoed civil rights legislation, clashing with Congress',
    ],
    isSeen: false
  },
  {
    id: 18,
    name: 'Ulysses S. Grant',
    party: 'Republican',
    image: 'assets/images/presidents/Ulysses_S_Grant.jpg',
    periodInOffice: ['1869–1877'],
    description: 'Union general in the Civil War who became president during Reconstruction.',
    notableAchievements: [
      'Promoted civil rights and worked to suppress the Ku Klux Klan',
      'Faced numerous corruption scandals within his administration',
    ],
    isSeen: false
  },
  {
    id: 19,
    name: 'Rutherford B. Hayes',
    party: 'Republican',
    image: 'assets/images/presidents/Rutherford_B_Hayes.jpg',
    periodInOffice: ['1877–1881'],
    description: 'Ended Reconstruction and restored political balance after a contested election.',
    notableAchievements: [
      'Withdrew federal troops from the South as part of the Compromise of 1877',
      'Promoted civil service reform',
    ],
    isSeen: false
  },
  {
    id: 20,
    name: 'James A. Garfield',
    party: 'Republican',
    image: 'assets/images/presidents/James_Garfield.jpg',
    periodInOffice: ['1881'],
    description: 'Assassinated early in his presidency after advocating for reform.',
    notableAchievements: [
      'Fought corruption in the Post Office',
      'Assassinated by a disgruntled office seeker, highlighting the need for civil service reform',
    ],
    isSeen: false
  },
  {
    id: 21,
    name: 'Chester A. Arthur',
    party: 'Republican',
    image: 'assets/images/presidents/Chester_A_Arthur.jpg',
    periodInOffice: ['1881–1885'],
    description: 'Took over after Garfield’s death and surprised many by supporting reform.',
    notableAchievements: [
      'Signed the Pendleton Civil Service Reform Act',
      'Modernized the U.S. Navy',
    ],
    isSeen: false
  },
  {
    id: 22,
    name: 'Grover Cleveland',
    party: 'Democratic',
    image: 'assets/images/presidents/Grover_Cleveland.jpg',
    periodInOffice: ['1885–1889'],
    description: 'Only U.S. president to serve two non-consecutive terms.',
    notableAchievements: [
      'Fought corruption and vetoed many private pension bills',
      'Supported the gold standard and limited government',
    ],
    isSeen: false
  },
  {
    id: 23,
    name: 'Benjamin Harrison',
    party: 'Republican',
    image: 'assets/images/presidents/Benjamin_Harrison.jpg',
    periodInOffice: ['1889–1893'],
    description: 'Grandson of William Henry Harrison; supported economic modernization.',
    notableAchievements: [
      'Signed the Sherman Antitrust Act',
      'Facilitated the admission of six new western states'
    ],
    isSeen: false
  },
  {
    id: 24,
    name: 'William McKinley',
    party: 'Republican',
    image: 'assets/images/presidents/William_McKinley.jpg',
    periodInOffice: ['1897–1901'],
    description: 'Led the nation to victory in the Spanish-American War.',
    notableAchievements: [
      'Annexed the Philippines, Guam, and Puerto Rico',
      'Assassinated early in his second term, elevating Theodore Roosevelt'
    ],
    isSeen: false
  },
  {
    id: 25,
    name: 'Theodore Roosevelt',
    party: 'Republican',
    image: 'assets/images/presidents/Theodore_Roosevelt.jpg',
    periodInOffice: ['1901–1909'],
    description: 'Progressive reformer and conservationist known for his dynamic leadership.',
    notableAchievements: [
      'Built the Panama Canal',
      'Broke up monopolies and protected national parks',
      'Won the Nobel Peace Prize for mediating the Russo-Japanese War'
    ],
    isSeen: false
  },
  {
    id: 26,
    name: 'William Howard Taft',
    party: 'Republican',
    image: 'assets/images/presidents/William_H_Taft.jpg',
    periodInOffice: ['1909–1913'],
    description: 'Only person to serve as both U.S. president and Chief Justice of the Supreme Court.',
    notableAchievements: [
      'Expanded antitrust prosecutions beyond Roosevelt’s efforts',
      'Strengthened the Interstate Commerce Commission'
    ],
    isSeen: false
  },
  {
    id: 27,
    name: 'Woodrow Wilson',
    party: 'Democratic',
    image: 'assets/images/presidents/Woodrow_Wilson.jpg',
    periodInOffice: ['1913–1921'],
    description: 'Led the U.S. during World War I and pushed for the League of Nations.',
    notableAchievements: [
      'Established the Federal Reserve and Federal Trade Commission',
      'Issued the Fourteen Points peace plan',
      'Won the Nobel Peace Prize'
    ],
    isSeen: false
  },
  {
    id: 28,
    name: 'Warren G. Harding',
    party: 'Republican',
    image: 'assets/images/presidents/Warren_G_Harding.jpg',
    periodInOffice: ['1921–1923'],
    description: 'Promised a “return to normalcy” after World War I.',
    notableAchievements: [
      'Signed the Budget and Accounting Act of 1921',
      'Administration plagued by scandals, including Teapot Dome'
    ],
    isSeen: false
  },
  {
    id: 29,
    name: 'Calvin Coolidge',
    party: 'Republican',
    image: 'assets/images/presidents/Calvin_Coolidge.jpg',
    periodInOffice: ['1923–1929'],
    description: 'Known for his quiet demeanor and pro-business policies during the Roaring Twenties.',
    notableAchievements: [
      'Reduced federal debt and taxes',
      'Supported civil rights for African Americans and Native Americans'
    ],
    isSeen: false
  },
  {
    id: 30,
    name: 'Herbert Hoover',
    party: 'Republican',
    image: 'assets/images/presidents/Herbert_Hoover.jpg',
    periodInOffice: ['1929–1933'],
    description: 'President during the onset of the Great Depression.',
    notableAchievements: [
      'Oversaw response to the 1929 stock market crash',
      'Built the Hoover Dam project'
    ],
    isSeen: false
  },
  {
    id: 31,
    name: 'Franklin D. Roosevelt',
    party: 'Democratic',
    image: 'assets/images/presidents/Franklin_D_Roosevelt.jpg',
    periodInOffice: ['1933–1945'],
    description: 'Only president elected to four terms; led the U.S. through the Great Depression and WWII.',
    notableAchievements: [
      'Created the New Deal to combat economic collapse',
      'Guided the U.S. during World War II',
      'Established Social Security'
    ],
    isSeen: false
  },
  {
    id: 32,
    name: 'Harry S. Truman',
    party: 'Democratic',
    image: 'assets/images/presidents/Harry_Truman.jpg',
    periodInOffice: ['1945–1953'],
    description: 'Authorized the atomic bomb and led early Cold War policies.',
    notableAchievements: [
      'Implemented the Marshall Plan to rebuild Europe',
      'Desegregated the U.S. military',
      'Led the U.S. into the Korean War'
    ],
    isSeen: false
  },
  {
    id: 33,
    name: 'Dwight D. Eisenhower',
    party: 'Republican',
    image: 'assets/images/presidents/Dwight_D_Eisenhower.jpg',
    periodInOffice: ['1953–1961'],
    description: 'Former Allied commander in WWII who became president during the Cold War.',
    notableAchievements: [
      'Launched the Interstate Highway System',
      'Enforced school desegregation in Little Rock',
      'Warned of the “military-industrial complex” in his farewell address'
    ],
    isSeen: false
  },
  {
    id: 34,
    name: 'John F. Kennedy',
    party: 'Democratic',
    image: 'assets/images/presidents/John_F_Kennedy.jpg',
    periodInOffice: ['1961–1963'],
    description: 'Youngest elected president, known for charisma and Cold War leadership.',
    notableAchievements: [
      'Managed the Cuban Missile Crisis',
      'Started the Apollo space program',
      'Called for civil rights legislation before his assassination'
    ],
    isSeen: false
  },
  {
    id: 35,
    name: 'Lyndon B. Johnson',
    party: 'Democratic',
    image: 'assets/images/presidents/Lyndon_B_Johnson.jpg',
    periodInOffice: ['1963–1969'],
    description: 'Became president after JFK’s assassination and pushed forward civil rights reforms.',
    notableAchievements: [
      'Signed the Civil Rights Act of 1964 and Voting Rights Act of 1965',
      'Launched the “Great Society” anti-poverty programs',
      'Escalated U.S. involvement in the Vietnam War'
    ],
    isSeen: false
  },
  {
    id: 36,
    name: 'Richard Nixon',
    party: 'Republican',
    image: 'assets/images/presidents/Richard_Nixon.jpg',
    periodInOffice: ['1969–1974'],
    description: 'Resigned due to the Watergate scandal; first president to do so.',
    notableAchievements: [
      'Opened diplomatic relations with China',
      'Ended U.S. involvement in Vietnam',
      'Created the Environmental Protection Agency (EPA)'
    ],
    isSeen: false
  },
  {
    id: 37,
    name: 'Gerald Ford',
    party: 'Republican',
    image: 'assets/images/presidents/Gerald_Ford.jpg',
    periodInOffice: ['1974–1977'],
    description: 'Took office after Nixon’s resignation; never elected president or vice president.',
    notableAchievements: [
      'Pardoned Richard Nixon',
      'Presided over economic challenges like inflation and recession'
    ],
    isSeen: false
  },
  {
    id: 38,
    name: 'Jimmy Carter',
    party: 'Democratic',
    image: 'assets/images/presidents/Jimmy_Carter.jpg',
    periodInOffice: ['1977–1981'],
    description: 'Known for human rights advocacy and post-presidency humanitarian work.',
    notableAchievements: [
      'Brokered the Camp David Accords between Egypt and Israel',
      'Faced the Iran Hostage Crisis and energy crisis',
      'Won the Nobel Peace Prize in 2002'
    ],
    isSeen: false
  },
  {
    id: 39,
    name: 'Ronald Reagan',
    party: 'Republican',
    image: 'assets/images/presidents/Ronald_Reagan.jpg',
    periodInOffice: ['1981–1989'],
    description: 'Former actor and governor who became a conservative icon.',
    notableAchievements: [
      'Implemented Reaganomics to stimulate economic growth',
      'Played a key role in ending the Cold War',
      'Survived an assassination attempt in 1981'
    ],
    isSeen: false
  },
  {
    id: 40,
    name: 'George H. W. Bush',
    party: 'Republican',
    image: 'assets/images/presidents/Herbert_Walker_Bush.jpg',
    periodInOffice: ['1989–1993'],
    description: 'Oversaw the end of the Cold War and U.S. victory in the Gulf War.',
    notableAchievements: [
      'Led Operation Desert Storm against Iraq',
      'Signed the Americans with Disabilities Act',
      'Managed the collapse of the Soviet Union'
    ],
    isSeen: false
  },
  {
    id: 41,
    name: 'Bill Clinton',
    party: 'Democratic',
    image: 'assets/images/presidents/Bill_Clinton.jpg',
    periodInOffice: ['1993–2001'],
    description: 'Presided over a time of economic prosperity and globalization.',
    notableAchievements: [
      'Enacted welfare reform and balanced the federal budget',
      'Signed NAFTA into law',
      'Impeached by the House but acquitted by the Senate'
    ],
    isSeen: false
  },
  {
    id: 42,
    name: 'George W. Bush',
    party: 'Republican',
    image: 'assets/images/presidents/George_W_Bush.jpg',
    periodInOffice: ['2001–2009'],
    description: 'President during the 9/11 attacks and the War on Terror.',
    notableAchievements: [
      'Launched the wars in Afghanistan and Iraq',
      'Created the Department of Homeland Security',
      'Passed No Child Left Behind education reform'
    ],
    isSeen: false
  },
  {
    id: 43,
    name: 'Barack Obama',
    party: 'Democratic',
    image: 'assets/images/presidents/Barack_Obama.jpg',
    periodInOffice: ['2009–2017'],
    description: 'First African American president; known for healthcare reform.',
    notableAchievements: [
      'Signed the Affordable Care Act (Obamacare)',
      'Ordered the operation that killed Osama bin Laden',
      'Won the Nobel Peace Prize in 2009'
    ],
    isSeen: false
  },
  {
    id: 44,
    name: 'Donald J. Trump',
    party: 'Republican',
    image: 'assets/images/presidents/Donald_Trump.jpg',
    periodInOffice: ['2017–2021', '2025-present'],
    description: 'Businessman and TV personality who ran a populist, anti-establishment campaign.',
    notableAchievements: [
      'Passed major tax reform in 2017',
      'Appointed three Supreme Court justices',
      'Facilitated the Abraham Accords in the Middle East',
      'Impeached twice — acquitted both times'
    ],
    isSeen: false
  },
  {
    id: 45,
    name: 'Joe Biden',
    party: 'Democratic',
    image: 'assets/images/presidents/Joe_Biden.jpg',
    periodInOffice: ['2021–present'],
    description: 'Oldest serving U.S. president, former VP under Barack Obama.',
    notableAchievements: [
      'Passed the American Rescue Plan for COVID-19 relief',
      'Signed the Inflation Reduction Act',
      'Oversaw U.S. withdrawal from Afghanistan'
    ],
    isSeen: false
  },
];
