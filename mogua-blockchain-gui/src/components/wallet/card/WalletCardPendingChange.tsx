import React from 'react';
import { Trans } from '@lingui/macro';
import FarmCard from '../../farm/card/FarmCard';
import useWallet from '../../../hooks/useWallet';
import useCurrencyCode from '../../../hooks/useCurrencyCode';
import { dog_to_mogua_string } from '../../../util/mogua';

type Props = {
  wallet_id: number;
};

export default function WalletCardPendingChange(props: Props) {
  const { wallet_id } = props;

  const { wallet, loading } = useWallet(wallet_id);
  const currencyCode = useCurrencyCode();

  const value = wallet?.wallet_balance?.pending_change;

  return (
    <FarmCard
      loading={loading}
      valueColor="secondary"
      title={<Trans>Pending Change</Trans>}
      tooltip={
        <Trans>
          This is the pending change, which are change coins which you have sent
          to yourself, but have not been confirmed yet.
        </Trans>
      }
      value={
        <>
          {dog_to_mogua_string(value)} {currencyCode}
        </>
      }
    />
  );
}
