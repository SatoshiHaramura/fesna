import { useRef } from 'react';

import { Dialog } from '@headlessui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const PrivacyPolicyDialog = ({ isOpen, onClose }: Props) => {
  const dialogTitleRef = useRef(null);

  return (
    <Dialog
      initialFocus={dialogTitleRef}
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/60" />
      <div className="fixed inset-0 overflow-y-scroll">
        <div className="flex min-h-full items-center justify-center p-6">
          <Dialog.Panel className="mx-auto max-w-sm rounded-3xl">
            <div className="max-w-sm rounded-2xl bg-stone-50 p-4 text-left">
              <Dialog.Title
                ref={dialogTitleRef}
                as="h2"
                className="text-center text-3xl font-medium"
              >
                プライバシーポリシー
              </Dialog.Title>
              <div className="py-4 px-4">
                <p className="text-sm text-gray-500">
                  s_haramura（以下「当方」といいます。）が提供する「Stock
                  Word」（以下「本サービス」といいます。）における、利用者についての個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
                </p>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第1条（収集する情報）
                </h3>
                <div className="py-1 px-4">
                  <p className="text-sm text-gray-500">
                    本サービスでは、Vercel社のアナリティクス機能を使用して、訪問者のIPアドレス、ブラウザの種類、使用したデバイス、訪問したページなどの情報を収集する場合があります。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第2条（利用目的）
                </h3>
                <div className="py-1 px-4 text-sm text-gray-500">
                  <p className="py-1">
                    収集した情報は、本サービスの利用状況の分析、サイトの改善、およびユーザーに関する統計情報の収集に使用されます。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第3条（情報の共有）
                </h3>
                <div className="py-1 px-4 text-sm text-gray-500">
                  <p className="py-1">
                    当方は、収集した情報を第三者に提供することはありません。
                    ただし、アナリティクス機能を提供するVercel社に情報を提供する場合があります。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第4条（データの保管）
                </h3>
                <div className="py-1 px-4 text-sm text-gray-500">
                  <p className="py-1">
                    当方は、収集したデータをVercel社のサーバー上に保存します。
                    Vercel社は、EU一般データ保護規則（GDPR）に準拠しており、ユーザーのプライバシーを保護するために適切なセキュリティ対策を講じています。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第5条（プライバシーポリシーの変更）
                </h3>
                <div className="py-1 px-4 text-sm text-gray-500">
                  <p className="py-1">
                    当方は、利用者に事前の通知をすることなく、必要に応じて本ポリシーを変更することができるものとします。
                  </p>
                </div>
              </div>
              <div className="py-4 text-center">
                <button
                  type="button"
                  className="w-24 rounded-full border border-gray-400 bg-gray-100 px-4 py-2 hover:bg-gray-50"
                  onClick={onClose}
                >
                  閉じる
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
