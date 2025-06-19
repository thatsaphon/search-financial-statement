'use server'

export const searchCompany = async (searchName: string) => {
  const response = await fetch(
    `https://market.sec.or.th/public/idisc/api/company/valuebyuniqueId`,
    {
      method: 'POST',
      body: JSON.stringify({ lang: 'th', content: searchName }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await response.json()
  return data
}
