import { useState } from 'react';

type DialogStateTuple = [
  isOpen: boolean,
  openDialog: () => void,
  closeDialog: () => void
];

const useDialog = (): DialogStateTuple => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return [isOpen, openDialog, closeDialog];
};

export default useDialog;
