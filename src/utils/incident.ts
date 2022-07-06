import { DonateProps } from '../components/organisms/Incident';

export const countTotalDonationsAmount = function(donations: DonateProps[]) {
    return donations.reduce((prev, curr) => prev + curr.amount, 0);
}
  