
import React from "react";
import {formatAmount} from "@/lib/utils"

import AnimatedCounter from "@/components/AnimatedCounter"
import DoughnutChart from "./DoughnutChart";
const TotalBalancebox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return(
    <section className="total-balance">
        <div className="total-balance-chart">
            <DoughnutChart accounts={accounts}/>
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="header-2">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label">
                    Total Current Balance
                </p>
                <p className="total-balance-amount flex-center gap-2">
                   <AnimatedCounter amount={totalCurrentBalance}/>
                </p>
            </div>
        </div>
    </section>

  );
};

export default TotalBalancebox;
