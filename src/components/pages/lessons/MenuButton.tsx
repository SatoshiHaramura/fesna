import { useRouter } from 'next/router';

const MenuButton = () => {
  const router = useRouter();
  const transitToMenusPage = (): void => {
    router.push(`/menus`);
  };

  return (
    <button
      onClick={transitToMenusPage}
      className="m-1 w-40 rounded-full border border-cyan-500 bg-cyan-500 bg-opacity-5 py-2 px-1 text-xl text-gray-800 hover:bg-opacity-20"
    >
      メニュー選択へ
    </button>
  );
};

export default MenuButton;
