export const business = {
  name: 'Cafe Bahar',
  status: 'unverified',
  addressStatus: 'unverified',
  phoneStatus: 'unverified'
};

export const contact = {
  source: 'Public-listing reference supplied by the user',
  address: '3-5, 815/A, Old MLA Quarters Road, Avanti Nagar, Himayatnagar, Hyderabad, Telangana 500029, India',
  phoneDisplay: '040 2324 3798',
  phoneLink: '+914023243798',
  addressStatus: 'unverified',
  phoneStatus: 'unverified',
  maps: 'https://www.google.com/maps/search/?api=1&query=3-5%2C%20815%2FA%2C%20Old%20MLA%20Quarters%20Road%2C%20Avanti%20Nagar%2C%20Himayatnagar%2C%20Hyderabad%2C%20Telangana%20500029%2C%20India',
  verification: 'Public listing details supplied for concept use; verify address and phone with the owner before publication.'
};

export const gallery = [
  { image: 'photo-1517248135467-4c7edcad34c4', source: 'Unsplash', permissionStatus: 'Review current terms before production', alt: 'Illustrative restaurant interior; not a verified Cafe Bahar photograph', label: 'A place to gather' },
  { image: 'photo-1414235077428-338989a2e8c0', source: 'Unsplash', permissionStatus: 'Review current terms before production', alt: 'Illustrative plated meal; not a verified Cafe Bahar photograph', label: 'Around the table' },
  { image: 'photo-1504674900247-0877df9cc836', source: 'Unsplash', permissionStatus: 'Review current terms before production', alt: 'Illustrative meal shared at a table; not a verified Cafe Bahar photograph', label: 'Made to share' },
  { image: 'photo-1555939594-58d7cb561ad1', source: 'Unsplash', permissionStatus: 'Review current terms before production', alt: 'Illustrative food prepared over a grill; not a verified Cafe Bahar photograph', label: 'From the grill' },
  { image: 'photo-1514933651103-005eec06c04b', source: 'Unsplash', permissionStatus: 'Review current terms before production', alt: 'Illustrative restaurant dining space; not a verified Cafe Bahar photograph', label: 'A welcoming room' }
];

export const socialPosts = [
  {
    type: 'WORLD FOOD DAY',
    source: 'Original SVG concept illustration',
    contentSource: 'Caption adapted from user-supplied post screenshot',
    permissionStatus: 'Illustrative artwork; caption awaits restaurant approval',
    title: 'Good food brings people together.',
    copy: 'Happy World Food Day from Cafe Bahar. Good food brings people together, creates memories, and celebrates the flavours we love.',
    image: '/images/world-food-day-concept.svg',
    alt: 'Illustrative World Food Day concept poster with a bowl motif; not official Cafe Bahar artwork'
  },
  {
    type: 'DUSSEHRA GREETING',
    source: 'Original SVG concept illustration',
    contentSource: 'Caption adapted from user-supplied post screenshot',
    permissionStatus: 'Illustrative artwork; caption awaits restaurant approval',
    title: 'Celebrate the victory of good over evil.',
    copy: 'May this Dussehra bring happiness, prosperity, and new beginnings to every home. Happy Dussehra from Cafe Bahar.',
    image: '/images/dussehra-concept.svg',
    alt: 'Illustrative Dussehra greeting concept poster with a lamp motif; not official Cafe Bahar artwork'
  }
];

export const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
