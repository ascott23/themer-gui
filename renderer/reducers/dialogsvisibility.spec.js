import { dialogsVisibilityReducer } from './dialogsvisibility';
import {
  tipsDialogOpen,
  exportDialogOpen,
  exportProgressDialogOpen,
  prefillDialogOpen,
  helpDialogOpen,
  closeDialogs,
} from '../actions';

describe('dialogsVisibilityReducer', () => {
  it('should initialize to all dialogs closed', () => {
    expect(dialogsVisibilityReducer(undefined, {})).toMatchSnapshot();
  });
  it('should open the tips dialog', () => {
    expect(dialogsVisibilityReducer(undefined, tipsDialogOpen())).toMatchSnapshot();
  });
  it('should open the export dialog', () => {
    expect(dialogsVisibilityReducer(undefined, exportDialogOpen())).toMatchSnapshot();
  });
  it('should open the export progress dialog', () => {
    expect(dialogsVisibilityReducer(undefined, exportProgressDialogOpen())).toMatchSnapshot();
  });
  it('should open the prefill dialog', () => {
    expect(dialogsVisibilityReducer(undefined, prefillDialogOpen())).toMatchSnapshot();
  });
  it('should open the help dialog', () => {
    expect(dialogsVisibilityReducer(undefined, helpDialogOpen())).toMatchSnapshot();
  });
  it('should close all dialogs', () => {
    const initialState = {
      export: true,
      tips: false,
      exportProgress: true,
      help: false,
    };
    expect(dialogsVisibilityReducer(initialState, closeDialogs())).toMatchSnapshot();
  });
});
