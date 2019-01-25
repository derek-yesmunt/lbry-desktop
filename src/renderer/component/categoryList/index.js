import { connect } from 'react-redux';
import { doFetchClaimsByChannel } from 'redux/actions/content';
import { makeSelectCategoryListUris } from 'redux/selectors/content';
import {
  makeSelectClaimsInChannelForCurrentPage,
  makeSelectFetchingChannelClaims,
  doResolveUris,
} from 'lbry-redux';
import { selectShowNsfw } from 'redux/selectors/settings';
import CategoryList from './view';

const select = (state, props) => ({
  urisInList: makeSelectCategoryListUris(props.uris, props.categoryLink)(state),
  fetching: makeSelectFetchingChannelClaims(props.categoryLink)(state),
  obscureNsfw: !selectShowNsfw(state),
});

const perform = dispatch => ({
  fetchChannel: channel => dispatch(doFetchClaimsByChannel(channel)),
  resolveUris: uris => dispatch(doResolveUris(uris)),
});

export default connect(
  select,
  perform
)(CategoryList);
