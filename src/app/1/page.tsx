import DisplayData from '@/components/DisplayData'
import {BACKGROUND_OPTIONS} from '@/components/background/BgSnippets'
import {decodeData} from '@/lib/utils'
import NotFound from '../not-found'
import DataLoading from './loading'

export async function generateMetadata({searchParams}: any) {
  const data = decodeData(searchParams.data)

  if (!data) {
    return {}
  }

  return {
    title: `${data.n}'s`,
    description: `Find all of ${data.n}'s links in one place.`,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://links.cgen.cc',
      title: `${data.n}'s - CGen Links`,
      description: `Find all of ${data.n}'s links in one place.`,
      images: `https://linknode.vercel.app/api/og?data=${encodeURI(data.n)}`,
      siteName: `${data.n}'s - CGen Links`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.n} - CGen Links`,
      description: `Find all of ${data.n}'s links in one place.`,
      images: `https://linknode.vercel.app/api/og?data=${encodeURI(data.n)}`,
      creator: '@sujjeeee',
    },
  }
}

export default function page({searchParams}: any) {
  if (!searchParams.data) NotFound()

  const data = decodeData(searchParams.data)

  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
    : null

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {selectedBgComponent}
      </div>
      <div className="p-2 pt-10 hide_scrollbar">
        {data ? <DisplayData acc={data} /> : <DataLoading />}
      </div>
    </>
  )
}

// 'use client'

// import React from 'react'
// import { notFound, useSearchParams } from 'next/navigation'
// import DisplayData from '@/components/DisplayData'
// import { decodeData } from '@/lib/utils'
// import DataLoading from './loading'
// import { BACKGROUND_OPTIONS } from '@/components/background/BgSnippets'

// export default function Links() {
//     const searchParams = useSearchParams()
//     const acc = searchParams.get('data')

//     if (!acc) {
//         notFound();
//     }
//     const [decodedData, setDecodedData] = React.useState<Acc | null>(null);

//     React.useEffect(() => {
//         if (acc) {
//             const decoded = decodeData(acc);
//             setDecodedData(decoded);
//         }
//     }, [acc]);

//     // Find the matching background component based on the background code
//     const selectedBgOption = decodedData
//         ? BACKGROUND_OPTIONS.find((option) => option.code === decodedData.bg)
//         : null;

//     const selectedBgComponent = selectedBgOption ? selectedBgOption.component : null;

//     return (
//         <>
//             <div className="fixed left-0 top-0 -z-10 h-full w-full">
//                 {selectedBgComponent}
//             </div>
//             <div className='p-2 pt-10 hide_scrollbar'>
//                 {decodedData ? (
//                     <DisplayData acc={decodedData} />
//                 ) : (
//                     <DataLoading />
//                 )}
//             </div>
//         </>
//     );
// }
