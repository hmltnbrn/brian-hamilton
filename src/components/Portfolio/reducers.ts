import { TOGGLE_DIALOG, GET_PORTFOLIO, GET_PROJECT } from './actions';
import { Reducer, AnyAction } from 'redux';

interface ProjectType {
  id: number;
  background: string;
  title: string;
  year: string;
  description: string;
  technology: string[];
  links: Array<{
    href: string;
    text: string;
  }>;
  complete: boolean;
  active: boolean;
}

export interface IPortfolioState {
  dialog: boolean;
  portfolio: ProjectType[];
  project: ProjectType | {};
}

interface ActionTypes {
  type: typeof TOGGLE_DIALOG | typeof GET_PORTFOLIO | typeof GET_PROJECT;
  payload?: IPortfolioState;
}

const initialState: IPortfolioState = {
  dialog: false,
  portfolio: [],
  project: {}
};

const PortfolioReducers: Reducer<IPortfolioState, AnyAction> = (
  state: IPortfolioState = initialState,
  action: ActionTypes
): IPortfolioState => {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        dialog: !state.dialog
      };
    case GET_PORTFOLIO:
      return {
        ...state,
        portfolio: action.payload as IPortfolioState extends ProjectType[]
          ? ProjectType[]
          : never
      };
    case GET_PROJECT:
      return {
        ...state,
        dialog: true,
        project: action.payload as IPortfolioState
      };
    default:
      return state;
  }
};

export default PortfolioReducers;
