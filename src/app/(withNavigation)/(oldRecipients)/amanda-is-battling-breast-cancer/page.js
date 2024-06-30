import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import Amanda from './images/Amanda-300x300.webp'
import CommentAndHeartContainer from '../CommentAndHeartContainer'

export const metadata = {
  title: 'Amanda is Battling Breast Cancer',
  // description: 'Generated by create next app',
}

const AmandaRecipient = () => {
  const id = 'bd53c018-1090-4686-b517-ed92906f9185'
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent className="md:pt-[28px] md:pb-[35px]">
        <div
          className={'flex flex-col text-primary items-center justify-between'}
        >
          <h1
            className={
              'py-2 max-sm:text-center text-[30px] max-sm:mx-auto font-semibold leading-[40px] md:leading-[50px]'
            }
          >
            Amanda is Battling Breast Cancer
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              Amanda is Battling Breast Cancer
            </p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={''}>
          <div
            className={
              'group relative w-fit p-[6px] mt-[-6px] ml-[-6px]  shadow-sm md:float-left md:mr-6 mb-6'
            }
          >
            <Image
              src={Amanda}
              placeholder="blur"
              alt="profile picture of Amanda"
              className="min-w-full lg:w-[300px] h-auto"
            />
            <div
              className={
                'opacity-0 group-hover:opacity-15 absolute top-0 left-0 w-full h-full bg-primary group-hover:transition-all group-hover:duration-500'
              }
            />
          </div>
          <p className={'mb-[11px]'}>
            Amanda was diagnosed with breast cancer and is recovering from major
            surgery she had late last year.
          </p>
          <p className={'mb-[11px]'}>
            Message from Amanda:{' '}
            <span className="italic">
              “My journey began in July 2015 with my first mammogram since I
              turned 40 in May. I had my mammogram then waited for results got
              letter and call that I needed to come in for second mammogram for
              more detailed view because they saw suspicious spots. So after
              that I had to have biopsy in August because the second one showed
              same things. My dr called me on August 17th to let me know my
              results of biopsy was that I had DCIS stage 0 breast cancer. I
              cried and called my husband and my parents to let them know right
              away. I had many appointments from that point on for genetic
              testing and BRCA testing and meeting with oncologist. The waiting
              part was the hardest because I’m not a patient waiter and I suffer
              from anxiety disorder as well. I was determined to stay positive
              thru this whole issue. My motto is “it is what it is” now let’s do
              what needs to be done. I have a great support system. My parents
              went to every dr appointment with me as my husband had to work and
              pick up our girls (who are 10 & 4). My genomic testing score was a
              79 out of 100 which meant if cancer came back it would be more
              aggressive and the info from biopsy being estrogen+ and
              progesterone- and ki-67 number at 33. My BRCA test came back
              negative!! I talked with my plastic surgeon and breast cancer dr
              and my husband we decided best option for me was mastectomy. So on
              Oct 26,2015, I had right mastectomy with reconstruction with
              latissamus flap. I am now 4 weeks almost post op and glad to
              report that pathology report came back they got it all as it was
              only located in milk duct and lymph nodes were clear. I’m still
              very limited as to what I can do on my right side and back is sore
              from them taking the muscle to use for flap but all is great
              because I’m here and will continue to see my girls grow into
              beautiful young women. I will be on Tamoxifen for next 5 years but
              that’s OK.”
            </span>
          </p>
          <p className={'mb-[11px]'}>
            Please let Amanda know she is in your thoughts and prayers by
            clicking the heart below (equals a hug), Comment or Share.
          </p>
        </div>
        <CommentAndHeartContainer id={id} />
      </ContentContainerWithSidebar>
    </div>
  )
}

export default AmandaRecipient