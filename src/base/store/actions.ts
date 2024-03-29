import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {headerAction} from '@/base/store';

const useHeaderActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(headerAction, dispatch);
};

export {useHeaderActions};
