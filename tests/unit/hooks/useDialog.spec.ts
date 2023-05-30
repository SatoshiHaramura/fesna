import { act, renderHook } from '@testing-library/react';

import useDialog from '@/hooks/useDialog';

describe('useDialog function', () => {
  test('the initial state of dialog is false', () => {
    const { result } = renderHook(() => useDialog());

    const isOpen = result.current[0];
    expect(isOpen).toBe(false);
  });

  test('the openDialog change the dialog state to true', () => {
    const { result } = renderHook(() => useDialog());

    const openDialog = result.current[1];
    act(() => {
      openDialog();
    });

    const isOpen = result.current[0];
    expect(isOpen).toBe(true);
  });

  test('the closeDialog change the dialog state to false', () => {
    const { result } = renderHook(() => useDialog());

    const openDialog = result.current[1];
    act(() => {
      openDialog();
    });

    let isOpen = result.current[0];
    expect(isOpen).toBe(true);

    const closeDialog = result.current[2];
    act(() => {
      closeDialog();
    });

    isOpen = result.current[0];
    expect(isOpen).toBe(false);
  });
});
