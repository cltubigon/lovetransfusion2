import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import Emma from './images/Emma.webp'
import CommentAndHeartContainer from '../CommentAndHeartContainer'

export const metadata = {
  title: 'Emma is Battling Leukemia Again',
  // description: 'Generated by create next app',
}

const EmmaRecipient = () => {
  const id = '8e57bbb9-0aee-4d17-b544-60ba95df33a4'
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
            Emma is Battling Leukemia Again
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              Emma is Battling Leukemia Again
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
              src={Emma}
              placeholder="blur"
              alt="profile picture of Emma"
              className="min-w-full md:min-w-[250px] lg:min-w-[340px] h-auto"
            />
            <div
              className={
                'opacity-0 group-hover:opacity-15 absolute top-0 left-0 w-full h-full bg-primary group-hover:transition-all group-hover:duration-500'
              }
            />
          </div>
          <div className={''}>
            <p className={'mb-[11px]'}>
              Many of you may remember our friend Emma who was diagnosed with
              leukemia 5 years ago. She is an amazing young lady who strives to
              help and bring comfort to children going through chemotherapy.
              Unfortunately the cancer has returned and she is battling it once
              again.
            </p>

            <p className={'mb-[11px]'}>
              More information on Emma: {''}
              <Link
                href="https://www.facebook.com/EmmaRose4P/"
                target="_blank"
                className="text-primary underline"
              >
                Emma Rose- A Patient Helping Patients
              </Link>
            </p>
            <p className={'mb-[11px]'}>
              Please let Emma and her family know she is in your thoughts and
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

export default EmmaRecipient
