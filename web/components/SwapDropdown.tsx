import { StateType, BaseAsset } from '@compound-finance/comet-extension/dist/CometState';
import { SwapRoute } from '@uniswap/smart-order-router';
import { useState } from 'react';

import LoadSpinner from './LoadSpinner';
import { ChevronDown } from './Icons';

type SwapDropdownState = undefined | [StateType.Loading] | [StateType.Hydrated, SwapRoute];

type SwapDropdownProps = {
  baseAsset: BaseAsset;
  state: SwapDropdownState;
};

const SwapDropdown = ({ baseAsset, state }: SwapDropdownProps) => {
  const [active, setActive] = useState(false);

  if (state === undefined) return null;

  // if (state[0] === StateType.Loading) {
  //   return (
  //     <div className="swap-dropdown swap-dropdown--loading L2">
  //       <div className="swap-dropdown__row">
  //         <div className="swap-dropdown__row__left">
  //           <LoadSpinner size={12} />
  //           <label className="label text-color--2">Calculating best price...</label>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  const expectedBorrow = '4,999,622.8900';
  const priceImpact = '0.00%';
  const maximumBorrow = '5,000,001.2345';
  const networkFee = '~$2.42';

  return (
    <div className={`swap-dropdown L2${active ? ' swap-dropdown--active' : ''}`} onClick={() => setActive(!active)}>
      <div className="swap-dropdown__row">
        <div className="swap-dropdown__row__left">
          <label className="label text-color--2">1.0000 DAI = 0.9899 USDC</label>
          <label className="label label--secondary text-color--2">(0.05% slippage)</label>
        </div>
        <div className="swap-dropdown__row__right">
          <ChevronDown className="svg--icon--2" />
        </div>
      </div>
        <div className="swap-dropdown__content">
          <div className="swap-dropdown__row">
            <div className="swap-dropdown__row__left">
              <label className="label label--secondary text-color--2">Expected Borrow</label>
            </div>
            <div className="swap-dropdown__row__right">
              <div className={`asset asset--${baseAsset.symbol}`}></div>
              <label className="label text-color--2">{expectedBorrow}</label>
            </div>
          </div>
          <div className="swap-dropdown__row">
            <div className="swap-dropdown__row__left">
              <label className="label label--secondary text-color--2">Price Impact</label>
            </div>
            <div className="swap-dropdown__row__right">
              <label className="label text-color--2">{priceImpact}</label>
            </div>
          </div>
          <div className="swap-dropdown__divider"></div>
          <div className="swap-dropdown__row">
            <div className="swap-dropdown__row__left">
              <label className="label label--secondary text-color--2">Maximum Borrow</label>
            </div>
            <div className="swap-dropdown__row__right">
              <div className={`asset asset--${baseAsset.symbol}`}></div>
              <label className="label text-color--2">{maximumBorrow}</label>
            </div>
          </div>
          <div className="swap-dropdown__row">
            <div className="swap-dropdown__row__left">
              <label className="label label--secondary text-color--2">Network Fee</label>
            </div>
            <div className="swap-dropdown__row__right">
              <label className="label text-color--2">{networkFee}</label>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SwapDropdown;