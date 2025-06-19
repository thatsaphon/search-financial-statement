'use client'

import { searchCompany } from '@/actions/search-company'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [searchName, setSearchName] = useState('')
  const [searchResults, setSearchResults] = useState<
    { Text: string; Value: string; Flag: boolean }[]
  >([])

  const handleSearch = async () => {
    const response = await searchCompany(searchName)
    console.log(response)
    setSearchResults(response)
    // setSearchResults(data)
  }

  return (
    <div className='p-4 flex flex-col w-screen min-h-screen items-center'>
      <h1 className='text-2xl'>Financial Statement</h1>
      <div>
        <Input
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button type='button' onClick={handleSearch}>
          Search
        </Button>
      </div>
      {searchResults.length > 0 && (
        <div>
          <ul>
            {searchResults.map((result) => (
              <li key={result.Value}>
                <Link
                  // href={`https://market.sec.or.th/public/idisc/th/FinancialReport/ALL-${result.Value}/20240101-20250619`}
                  href={`https://market.sec.or.th/public/idisc/th/Viewmore/fs-norm?uniqueIDReference=${result.Value}&dateFrom=20150101&dateTo=20250619`}
                  target={'_blank'}>
                  {result.Text}
                </Link>
                {/* <Link href={'/' + result.Value} target={'_blank'}>
                  {result.Text}
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
