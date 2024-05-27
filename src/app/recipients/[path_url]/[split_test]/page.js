import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import ClientPageRecipient from './ClientOriginal'
import { createClient } from '@/config/supabase/supabaseClient'
import singleUseQuery from '@/queries/useQuery/singleUseQuery'
import ClientSplitB from './ClientSplitB'

export const revalidate = 60

export async function generateMetadata({ params }) {
  const supabase = createClient()
  const path_url = params?.path_url.toLowerCase()
  const { data } = await supabase
    .from('recipients')
    .select('profile_picture, opengraph')
    .eq('path_url', path_url)
  const recipient = data[0]

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_ROOT_DOMAIN),
    title: recipient?.opengraph?.title,
    description: recipient?.opengraph?.description,
    openGraph: {
      images: [`${recipient?.profile_picture?.url}`],
    },
    twitter: {
      card: 'summary',
      title: recipient?.opengraph?.title,
      description: recipient?.opengraph?.description,
      images: [`${recipient?.profile_picture?.url}`], // Must be an absolute URL
    },
  }
}

export async function generateStaticParams() {
  const supabase = createClient()
  const { data: recipients } = supabase.from('recipients').select('path_url')
  return recipients || []
}

const RecipientPage = async ({ params: { path_url, split_test } }) => {
  const supabase = createClient()
  const queryClient = new QueryClient()
  console.log('split_test', split_test)

  await queryClient.prefetchQuery(
    singleUseQuery({
      queryKey: [`recipient - ${path_url.toLowerCase()}`],
      table: 'recipients',
      column: 'path_url',
      columnValue: path_url,
      supabase: supabase,
    })
  )
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {split_test === 'original' && (
          <ClientPageRecipient
            parameters={{ path_url: path_url.toLowerCase() }}
          />
        )}
        {split_test === 'splitB' && (
          <ClientSplitB parameters={{ path_url: path_url.toLowerCase() }} />
        )}
      </HydrationBoundary>
    </div>
  )
}

export default RecipientPage