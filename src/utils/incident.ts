import { DonationProps } from '../components/organisms/Incident';

export const countTotalDonationsAmount = function(donations: DonationProps[]) {
    return donations.reduce((prev, curr) => prev + curr.amount, 0);
}
  