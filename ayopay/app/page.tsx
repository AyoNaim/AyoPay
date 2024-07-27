import Balance from "@/components/Balance";
import Header from "@/components/Header";
import Image from "next/image";
import { formatAmount } from '@/lib/utils'
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  const user = {firstname: 'ayo', lastname:'mide'};
  return (
    <main className="home">
      <div className="home-content">
        <header className="home-header">
          <Header 
            type="greeting" 
            title="Hello" 
            subText="manage your finances efficiently" 
            user="Ayomide" 
          />
          <Balance accounts={[]} totalBanks={3} totalCurrentBalance={200.85}/>
        </header>
      </div>
      <RightSidebar
        user={user}
        transactions={[]}
        banks={['wema bank', 'first bank']}
      />
    </main> 
  );
}
