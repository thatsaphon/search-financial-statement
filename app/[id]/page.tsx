import React from 'react'

type Props = {
  params: Promise<{ id: string }>
}
export default async function page(props: Props) {
  //   const params = await props.params

  //   const html = await fetch(
  //     `https://market.sec.or.th/public/idisc/th/FinancialReport/ALL-${params.id}/20240101-20250619`
  //   )

  return <div>page</div>
}
