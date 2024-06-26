import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import Tink from './images/Tink.webp'
import CommentAndHeartContainer from '../CommentAndHeartContainer'

export const metadata = {
  title: 'Tink is Celebrating Her 6th Birthday!',
  // description: 'Generated by create next app',
}

const TinkRecipient = () => {
  const id = '11018277-0b3e-4b65-8672-6d5790915c32'
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
            Tink is Celebrating Her 6th Birthday!
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              Tink is Celebrating Her 6th Birthday!
            </p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'pb-[43px] flex flex-col md:flex-row gap-6'}>
          <div
            className={
              'group relative w-fit p-[6px] shadow-sm md:mt-[-6px] md:ml-[-6px]'
            }
          >
              <Image
                src={Tink}
                placeholder="blur"
                alt="profile picture of Tink"
                className="min-w-full md:min-w-[250px] lg:min-w-[392px] h-auto"
              />
            <div
              className={
                'opacity-0 group-hover:opacity-15 absolute top-0 left-0 w-full h-full bg-primary group-hover:transition-all group-hover:duration-500'
              }
            />
          </div>
          <div className={''}>
            <p className={'mb-[11px]'}>
              Today is Tink’s 6th birthday! Many of you have been praying for
              Adrienne “Tink” as she battles leukemia.
            </p>

            <p className={'mb-[11px]'}>
              Tink’s Facebook Page: {''}
              <Link
                href="https://www.facebook.com/Team-TINK-342136312538537/"
                target="_blank"
                className="text-primary underline"
              >
                Team TINK
              </Link>
            </p>
            <p className={'mb-[11px]'}>
              Please let Tink and her family know she is in your thoughts and
              prayers by clicking the heart below (equals a hug), Comment or
              Share.
            </p>
          </div>
        </div>
        <CommentAndHeartContainer id={id} />
      </ContentContainerWithSidebar>
    </div>
  )
}

export default TinkRecipient
