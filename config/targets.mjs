// Override URLs through environment variables if a new staging deployment is used.
// Keep credentials and tokens out of this file.
export const targets = Object.freeze([
  { id: 'HW', name: 'Hotel Website', url: process.env.HW_URL || 'https://forever-hotel-staging.malaysiawest.cloudapp.azure.com' },
  { id: 'MAD', name: 'Manager Dashboard', url: process.env.MAD_URL || 'https://forever-hotel-manager.duckdns.org' },
  { id: 'FDS', name: 'Front Desk System', url: process.env.FDS_URL || 'https://forever-hotel-frontdesk.duckdns.org' },
  { id: 'FOSS', name: 'Food Ordering and Service Requests', url: process.env.FOSS_URL || 'https://forever-hotel-food.duckdns.org' },
  { id: 'KMS', name: 'Kitchen Management System', url: process.env.KMS_URL || 'https://forever-hotel-kitchen.duckdns.org/login' },
  { id: 'WKMS', name: 'Worker Management System', url: process.env.WKMS_URL || 'https://forever-hotel-workers.duckdns.org' },
]);
