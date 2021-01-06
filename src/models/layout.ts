import { Effect, Reducer } from 'umi';

export interface LayoutModelState {
  scriptable: boolean;
}

export interface LayoutModelType {
  namespace: 'layout';
  state: LayoutModelState;
  effects: {
    initialise: Effect;
  };
  reducers: {
    save: Reducer<LayoutModelState>;
  };
}

const LayoutModel: LayoutModelType = {
  namespace: 'layout',
  state: {
    scriptable: false,
  },
  effects: {
    *initialise({ payload }, { put }) {
      yield put({
        type: 'layout/save',
        payload: { payload },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
export default LayoutModel;
