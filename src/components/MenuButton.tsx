import { FC } from 'react';

type Props = {
  handleClickMenuButton: () => void;
};

const MenuButton: FC<Props> = ({ handleClickMenuButton }) => {
  return (
    <button
      onClick={handleClickMenuButton}
      className="m-1 w-40 rounded-full border border-gray-300 bg-gray-100 py-2 px-1 font-sans text-xl font-thin text-gray-800 hover:bg-opacity-10"
    >
      メニュー選択へ
    </button>
  );
};

export default MenuButton;
