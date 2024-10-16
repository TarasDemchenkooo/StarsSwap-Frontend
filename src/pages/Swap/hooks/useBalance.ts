import { useQuery } from "@tanstack/react-query"
import getBalance from "../api/getBalance"
import { useTonAddress } from "@tonconnect/ui-react"
import { Assets } from "../../../shared/types/Assets"
import jettons from '../../../../public/jettons/jettons.json'

export default function useBalance(targetAsset: Assets | null | undefined) {
    const address = useTonAddress()
    const jetton = jettons.jettons.find(jetton => jetton.symbol === targetAsset)

    const { data, isLoading } = useQuery({
        queryKey: [jetton?.symbol.concat('_balance')],
        queryFn: () => getBalance(address, jetton?.ca!),
        enabled: Boolean(targetAsset && address),
        refetchInterval: 15000,
        initialData: 0
    })

    return { balance: data, isBalanceLoading: isLoading }
}