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
  },
  {
    id: 7,
    name: 'Abraham Lincoln',
    party: 'Republican',
    image: 'assets/images/lincoln.jpg',
    periodInOffice: ['1861–1865'],
    description: '16th president, led the U.S. through the Civil War.',
    notableAchievements: [
      'Issued the Emancipation Proclamation',
      'Preserved the Union during the American Civil War',
    ],
  },
  // Add more presidents...
];
