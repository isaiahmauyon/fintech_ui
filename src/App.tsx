import { useState } from 'react'
import TransactionRow from './components/TransactionRow'
import TransactionRowSkeleton from './components/TransactionRowSkeleton'
import EmptyTransactions from './components/EmptyTransactions'
import WalletBalanceCard from './components/WalletBalanceCard'
import OtpInput from './components/OtpInput'
import CurrencyAmount from './components/CurrencyAmount'
import ExchangeRateWidget from './components/ExchangeRateWidget'
import AccountSummaryCard from './components/AccountSummaryCard'
import TransactionDetailSheet from './components/TransactionDetailSheet'
import PinPad from './components/PinPad'
import AmountInput from './components/AmountInput'
import CardNumberInput from './components/CardNumberInput'
import PhoneNumberInput from './components/PhoneNumberInput'
import IdInput from './components/IdInput'
import KycStepper from './components/KycStepper'
import DocumentUploadCard from './components/DocumentUploadCard'
import SelfieCaptureCard from './components/SelfieCaptureCard'
import AccountTierIndicator from './components/AccountTierIndicator'
import TransactionStatusBadge from './components/TransactionStatusBadge'
import TransactionFilterBar from './components/TransactionFilterBar'
import SettlementSummaryCard from './components/SettlementSummaryCard'
import Skeleton from './components/Skeleton'
import ErrorState from './components/ErrorState'



function App() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [pin, setPin] = useState('')

  const handleKeyPress = (key: string) => {
    if (pin.length < 4) setPin(pin + key)
  }

  const handleBackspace = () => {
    setPin(pin.slice(0, -1))
  }
  const [selfieStatus, setSelfieStatus] = useState<'idle' | 'capturing' | 'captured' | 'failed'>('idle')


  return (
    <div className="p-8 max-w-md mx-auto">
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Enter verification code</p>
        <OtpInput length={6} onComplete={(code) => console.log('Complete:', code)} />
      </div>
      <WalletBalanceCard balance={124500.75} />
      <div className="flex flex-col gap-2 mb-6">
        <CurrencyAmount amount={1250000.5} size="lg" />
        <CurrencyAmount amount={1250000.5} size="md" />
        <CurrencyAmount amount={1250000.5} size="sm" />
        <CurrencyAmount amount={1250000} size="md" showDecimals={false} />
      </div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <div className="border border-gray-100 rounded-xl overflow-hidden">
        <TransactionRow
          title="Jumia Nigeria"
          subtitle="Today, 2:41 PM"
          amount={12500}
          type="debit"
          status="success"
        />
        <TransactionRow
          title="Wallet Top-up"
          subtitle="Yesterday, 9:12 AM"
          amount={50000}
          type="credit"
          status="pending"
        />
        <TransactionRow
          title="Failed Transfer"
          subtitle="Mon, 11:03 AM"
          amount={8000}
          type="debit"
          status="failed"
        />
      </div>

      {/* Loading Skeleton Demo */}
      <div className="border border-gray-100 rounded-xl overflow-hidden mt-6">
        <TransactionRowSkeleton />
        <TransactionRowSkeleton />
      </div>

      <div className="border border-gray-100 rounded-xl overflow-hidden mt-6">
        <EmptyTransactions />
      </div>

      {/* Exchange Rate Widget Demo */}
      <div className="mt-6">
        <ExchangeRateWidget rate={1400} />
      </div>


      <div className="mb-6 max-w-sm flex flex-col gap-3">
        <AccountSummaryCard
          accountName="Paul Isaiah"
          accountNumber="0123456789"
          accountType="personal"
          balance={124500.75}
        />
        <AccountSummaryCard
          accountName="Isaiah Design Studio"
          accountNumber="9876543210"
          accountType="business"
          balance={892300}
        />
      </div>

      <button
        onClick={() => setIsSheetOpen(true)}
        className="mb-6 text-sm text-blue-600 font-medium"
      >
        View transaction detail →
      </button>

      <TransactionDetailSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title="Jumia Nigeria"
        amount={12500}
        type="debit"
        status="success"
        date="Today, 2:41 PM"
        reference="TXN-8823001"
      />
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">PIN: {pin}</p>
        <PinPad onKeyPress={handleKeyPress} onBackspace={handleBackspace} />
      </div>

      <div className="mb-6 max-w-sm">
        <p className="text-sm text-gray-600 mb-2">Enter amount</p>
        <AmountInput onAmountChange={(amt) => console.log('Amount:', amt)} />
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Card number</p>
        <CardNumberInput />
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Phone number</p>
        <PhoneNumberInput />
      </div>

      <div className="mb-6">
        <IdInput idType="BVN" />
      </div>

      <div className="mb-6">
        <KycStepper
          steps={[
            { label: 'Personal Info' },
            { label: 'ID Verification' },
            { label: 'Selfie' },
            { label: 'Complete' },
          ]}
          currentStep={1}
        />
      </div>

      <div className="mb-6 max-w-xs">
        <DocumentUploadCard label="Upload ID Document" hint="JPG, PNG, or PDF, max 5MB" />
      </div>

      <div className="mb-6">
        <SelfieCaptureCard
          status={selfieStatus}
          onCapture={() => setSelfieStatus('captured')}
          onRetry={() => setSelfieStatus('idle')}
        />
      </div>
      <div className="mb-6">
        <AccountTierIndicator currentTier={1} />
      </div>
      <div className="flex gap-2 mb-6">
        <TransactionStatusBadge status="success" />
        <TransactionStatusBadge status="pending" />
        <TransactionStatusBadge status="failed" />
        <TransactionStatusBadge status="reversed" />
      </div>

      <div className="mb-6">
        <TransactionFilterBar />
      </div>

      <div className="mb-6 max-w-sm flex flex-col gap-3">
        <SettlementSummaryCard
          totalAmount={458200}
          transactionCount={12}
          settlementDate="Settled 4 Aug"
          status="processed"
        />
        <SettlementSummaryCard
          totalAmount={92500}
          transactionCount={1}
          settlementDate="Expected 7 Aug"
          status="scheduled"
        />
      </div>

      <div className="mb-6 flex flex-col gap-4 max-w-sm">
        <Skeleton variant="card" />
        <Skeleton variant="list" rows={2} />
        <Skeleton variant="table" rows={3} />
      </div>

      <div className="mb-6 border border-gray-100 rounded-xl">
        <ErrorState onRetry={() => alert('Retrying...')} />
      </div>



    </div>
  )
}

export default App


