import { useRef } from 'react';

import { Dialog } from '@headlessui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const TermsOfUseDialog = ({ isOpen, onClose }: Props) => {
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
                利用規約
              </Dialog.Title>
              <div className="py-4 px-4">
                <p className="text-sm text-gray-500">
                  本規約は、s_haramura（以下「当方」といいます。）が提供する「Stock
                  Word」（以下「本サービス」といいます。）を利用される際に適用されます。
                  ご利用にあたっては、本規約をお読みいただき、内容をご承諾の上でご利用ください。
                </p>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第1条（適用）
                </h3>
                <div className="py-1 px-4">
                  <p className="text-sm text-gray-500">
                    本規約は、利用者と当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第2条（禁止事項）
                </h3>
                <div className="py-1 px-4 text-sm text-gray-500">
                  <p className="py-1">
                    利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
                  </p>
                  <div className="py-1 pl-8 pr-4">
                    <ol className="list-decimal">
                      <li className="py-0.5">
                        本サービスの運営を妨げ、又はそのおそれのある行為
                      </li>
                      <li className="py-0.5">
                        他の利用者による本サービスの利用を妨害する行為
                      </li>
                      <li className="py-0.5">
                        本サービスにかかる著作権その他の権利を侵害する行為
                      </li>
                      <li className="py-0.5">
                        当方、他の利用者又は第三者の権利又は利益（名誉権、プライバシー権及び著作権を含みますが、これらに限られません。）を侵害する行為
                      </li>
                      <li className="py-0.5">
                        公序良俗その他法令に違反する行為及びこれに違反する恐れのある行為
                      </li>
                      <li className="py-0.5">本規約に違反する行為</li>
                      <li className="py-0.5">
                        前各号の他、本サービスの趣旨に鑑みて当方が不適切と判断する行為
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第3条（本サービスの提供の停止等）
                </h3>
                <div className="py-1 px-4 text-sm text-gray-500">
                  <p className="py-1">
                    当方は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  </p>
                  <div className="py-1 pl-8 pr-4">
                    <ol className="list-decimal">
                      <li className="py-0.5">
                        本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                      </li>
                      <li className="py-0.5">
                        地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                      </li>
                      <li className="py-0.5">
                        コンピュータまたは通信回線等が事故により停止した場合
                      </li>
                      <li className="py-0.5">
                        その他、当方が本サービスの提供が困難と判断した場合
                      </li>
                    </ol>
                  </div>
                  <p className="py-1">
                    当方は、本サービスの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第4条（利用制限）
                </h3>
                <div className="py-1 px-4 text-sm text-gray-500">
                  <p className="py-1">
                    当方は、利用者が以下のいずれかに該当する場合には、事前の通知なく、利用者に対して、本サービスの全部もしくは一部の利用を制限ができるものとします。
                  </p>
                  <div className="py-1 pl-8 pr-4">
                    <ol className="list-decimal">
                      <li className="py-0.5">
                        本規約のいずれかの条項に違反した場合
                      </li>
                      <li className="py-0.5">
                        本サービスについて、最終の利用から一定期間利用がない場合
                      </li>
                      <li className="py-0.5">
                        その他、当方が本サービスの利用を適当でないと判断した場合
                      </li>
                    </ol>
                  </div>
                  <p className="py-1">
                    当方は、本条に基づき当方が行った行為により利用者に生じた損害について、一切の責任を負いません。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第5条（保証の否認および免責事項）
                </h3>
                <div className="py-1 px-4">
                  <p className="text-sm text-gray-500">
                    当方は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                  </p>
                  <p className="text-sm text-gray-500">
                    当方は、本サービスに起因して利用者に生じたあらゆる損害について、当方の故意又は重過失による場合を除き、一切の責任を負いません。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第6条（サービス内容の変更、終了）
                </h3>
                <div className="py-1 px-4">
                  <p className="text-sm text-gray-500">
                    当方は、利用者に事前の通知をすることなく、本サービスの内容の全部又は一部を変更、追加又は停止する場合があり、利用者はこれをあらかじめ承諾するものとします。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第7条（利用規約の変更）
                </h3>
                <div className="py-1 px-4">
                  <p className="text-sm text-gray-500">
                    当方は、当方が必要と認めた場合は、利用者の個別の同意を要せず、本規約を変更することができるものとします。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第8条（個人情報の取扱い）
                </h3>
                <div className="py-1 px-4">
                  <p className="text-sm text-gray-500">
                    当方は、本サービスの利用によって取得する個人情報については、「プライバシーポリシー」に従い適切に取り扱うものとします。
                  </p>
                </div>
              </div>
              <div className="py-1">
                <h3 className="underline decoration-1 underline-offset-2">
                  第9条（準拠法・裁判管轄）
                </h3>
                <div className="py-1 px-4">
                  <p className="text-sm text-gray-500">
                    本規約の解釈にあたっては、日本法を準拠法とします。
                    本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。
                  </p>
                </div>
              </div>
              <div className="py-1 text-center">
                <button
                  type="button"
                  className="w-20 rounded-full border border-gray-400 bg-gray-100 px-4 py-2 hover:bg-gray-50"
                  onClick={onClose}
                >
                  戻る
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default TermsOfUseDialog;
