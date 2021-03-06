import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReportRewardTotals from "../../../Components/Widgets/ReportRewardTotals";

export default ReportRewardTotalsContainer = withTracker(() => {
  const reportsHandle = Meteor.subscribe('userReports');
  
  const loading = !reportsHandle.ready();
  
  const reports = UserReports.find({}, {_id: 1, rewardAmount: 1}).fetch();
  
  return {
    loading,
    reports
  };
})(ReportRewardTotals);