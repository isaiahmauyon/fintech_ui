import TransactionRow from './components/TransactionRow'

import TransactionRowSkeleton from './components/TransactionRowSkeleton'
import EmptyTransactions from './components/EmptyTransactions'

function App() {
  return (
    <div className="p-8 max-w-md mx-auto">
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
    </div>
  )
}

export default App


