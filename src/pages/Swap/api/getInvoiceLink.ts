import apiClient from "../../../shared/api/apiClinet"

export default function getInvoiceLink(hash: string): Promise<{ invoiceLink: string }> {
    return apiClient.get(`/user/invoice?hash=${hash}`)
}